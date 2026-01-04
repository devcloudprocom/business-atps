import { auth } from "@/auth"
import { Role } from "@/app/generated/prisma"
import { redirect } from "next/navigation"
import { getDashboardUrl, hasPermission } from "./auth-utils"

/**
 * Récupère la session serveur et redirige si non authentifié
 */
export async function getServerSession() {
  const session = await auth()
  
  if (!session?.user) {
    redirect('/auth/signin')
  }
  
  return session
}

/**
 * Vérifie l'authentification et les permissions
 */
export async function requireAuth(allowedRoles?: Role[]) {
  const session = await getServerSession()
  
  if (allowedRoles && !allowedRoles.includes(session.user.role)) {
    console.warn(`[Server Auth] Accès refusé pour ${session.user.role}`)
    redirect(getDashboardUrl(session.user.role))
  }
  
  return session
}

/**
 * Vérifie si l'utilisateur a un rôle minimum requis
 */
export async function requireMinimumRole(minimumRole: Role) {
  const session = await getServerSession()
  
  if (!hasPermission(session.user.role, minimumRole)) {
    console.warn(`[Server Auth] Permission insuffisante: ${session.user.role} < ${minimumRole}`)
    redirect(getDashboardUrl(session.user.role))
  }
  
  return session
}

/**
 * Vérifie l'accès admin
 */
export async function requireAdmin() {
  return requireAuth(['ADMIN'])
}

/**
 * Vérifie l'accès school admin ou supérieur
 */
export async function requireSchoolAdmin() {
  return requireAuth(['ADMIN', 'SCHOOL_ADMIN'])
}

/**
 * Récupère la session optionnellement (ne redirige pas)
 */
export async function getOptionalSession() {
  return await auth()
}