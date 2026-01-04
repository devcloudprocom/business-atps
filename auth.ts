import NextAuth from "next-auth"
import Keycloak from "next-auth/providers/keycloak"
import { Role } from "@/app/generated/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Keycloak({
      clientId: process.env.AUTH_KEYCLOAK_ID!,
      clientSecret: process.env.AUTH_KEYCLOAK_SECRET!,
      issuer: process.env.AUTH_KEYCLOAK_ISSUER,
    }),
  ],
  
  callbacks: {
    async jwt({ token, user, account, profile, trigger }) {
      if (trigger === "update") return token;
      if (Date.now() < (token.accessTokenExpiry as number)) return token;
  
      if (account && user) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.idToken = account.id_token
        token.userId = user.id
        
        console.log('🔍 === DEBUG PROFILE COMPLET ===')
        console.log(JSON.stringify(profile, null, 2))
        console.log('🔍 === FIN DEBUG ===')
        
        const allRoles = extractKeycloakRoles(profile)
        token.role = mapKeycloakRole(allRoles)
        
        console.log('🔑 Rôles extraits:', allRoles)
        console.log('🎯 Rôle mappé:', token.role)
        
        token.email = user.email
        token.name = user.name
        token.picture = user.image
      }
      
      return token
    },
    
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.userId as string
        session.user.email = token.email as string
        session.user.name = token.name as string
        session.user.role = token.role as Role
        session.accessToken = token.accessToken as string
      }
      
      return session
    },
    
    async signIn({ user, profile }) {
      if (!user.email) {
        console.error('❌ Pas d\'email fourni par Keycloak')
        return false
      }
      
      try {
        const { prisma } = await import("@/lib/prisma")
        
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email }
        })
        
        const allRoles = extractKeycloakRoles(profile)
        const role = mapKeycloakRole(allRoles)
        
        console.log('👤 Utilisateur:', user.email)
        console.log('🔑 Rôles Keycloak:', allRoles)
        console.log('🎯 Rôle final:', role)
        
        if (!existingUser) {
          const keycloakUserId = (profile as any)?.sub || user.id
          
          await prisma.user.create({
            data: {
              id: keycloakUserId,
              email: user.email,
              username: (profile as any)?.preferred_username || user.email.split('@')[0],
              firstName: (profile as any)?.given_name || '',
              lastName: (profile as any)?.family_name || '',
              passwordHash: '',
              role: role,
              isVerified: (profile as any)?.email_verified || false,
              language: 'fr',
              schoolId: role === 'STUDENT' ? undefined : null,
            }
          })
          
          console.log(`✅ Nouvel utilisateur créé : ${user.email} (${role})`)
        } else {
          await prisma.user.update({
            where: { email: user.email },
            data: {
              firstName: (profile as any)?.given_name || existingUser.firstName,
              lastName: (profile as any)?.family_name || existingUser.lastName,
              role: role,
              isVerified: (profile as any)?.email_verified || existingUser.isVerified,
              updatedAt: new Date(),
            }
          })
          
          console.log(`✅ Utilisateur mis à jour : ${user.email} (${role})`)
        }
        
        return true
      } catch (error) {
        console.error('❌ Erreur lors de la synchronisation avec Prisma:', error)
        return true
      }
    }
  },
  
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  
  trustHost: true,
  debug: process.env.NODE_ENV === 'development',
})

function extractKeycloakRoles(profile: any): string[] {
  const roles: string[] = []
  
  console.log('🔍 === EXTRACTION DES RÔLES ===')
  
  // 1. Vérifier resource_access (Client Roles)
  const resourceAccess = profile?.resource_access
  console.log('🔍 resource_access exists:', !!resourceAccess)
  console.log('🔍 resource_access keys:', resourceAccess ? Object.keys(resourceAccess) : 'none')
  
  // Essayer avec 'atps-auth'
  if (resourceAccess?.['atps-auth']?.roles) {
    console.log('🔍 Client roles (atps-auth):', resourceAccess['atps-auth'].roles)
    roles.push(...resourceAccess['atps-auth'].roles)
  }
  
  // Essayer avec le premier client trouvé si atps-auth n'existe pas
  if (roles.length === 0 && resourceAccess) {
    const firstClient = Object.keys(resourceAccess)[0]
    if (firstClient && resourceAccess[firstClient]?.roles) {
      console.log(`🔍 Client roles (${firstClient}):`, resourceAccess[firstClient].roles)
      roles.push(...resourceAccess[firstClient].roles)
    }
  }
  
  // 2. Vérifier realm_access (Realm Roles)
  const realmAccess = profile?.realm_access
  console.log('🔍 realm_access exists:', !!realmAccess)
  
  if (realmAccess?.roles) {
    console.log('🔍 Realm roles (brut):', realmAccess.roles)
    
    // Filtrer les rôles système Keycloak
    const filteredRoles = realmAccess.roles.filter((role: string) => 
      !role.startsWith('uma_') && 
      !role.startsWith('offline_') && 
      !role.startsWith('default-roles-') &&
      ['admin', 'school_admin', 'instructor', 'student', 'public_student'].includes(role.toLowerCase())
    )
    
    console.log('🔍 Realm roles (filtrés):', filteredRoles)
    roles.push(...filteredRoles)
  }
  
  // 3. Vérifier si les rôles sont directement dans profile.roles
  if (profile?.roles && Array.isArray(profile.roles)) {
    console.log('🔍 Direct roles:', profile.roles)
    roles.push(...profile.roles)
  }
  
  console.log('🔍 === RÔLES FINAUX EXTRAITS ===:', roles)
  console.log('🔍 === FIN EXTRACTION ===')
  
  return roles
}

function mapKeycloakRole(keycloakRoles: string[]): Role {
  console.log('🎯 Mapping des rôles:', keycloakRoles)
  
  // Convertir en minuscules pour la comparaison
  const lowerRoles = keycloakRoles.map(r => r.toLowerCase())
  
  if (lowerRoles.includes('admin')) {
    console.log('✅ Rôle détecté: ADMIN')
    return 'ADMIN'
  }
  if (lowerRoles.includes('school_admin') || lowerRoles.includes('schooladmin')) {
    console.log('✅ Rôle détecté: SCHOOL_ADMIN')
    return 'SCHOOL_ADMIN'
  }
  if (lowerRoles.includes('instructor')) {
    console.log('✅ Rôle détecté: INSTRUCTOR')
    return 'INSTRUCTOR'
  }
  if (lowerRoles.includes('student')) {
    console.log('✅ Rôle détecté: STUDENT')
    return 'STUDENT'
  }
  if (lowerRoles.includes('public_student')) {
    console.log('✅ Rôle détecté: PUBLIC_STUDENT')
    return 'PUBLIC_STUDENT'
  }
  console.log('⚠️ Aucun rôle reconnu, utilisation de PUBLIC_STUDENT par défaut')
  return 'PUBLIC_STUDENT';
}