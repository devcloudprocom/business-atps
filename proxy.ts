import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { auth } from "@/auth"

// Configuration des routes par rôle
const ROLE_ROUTES = {
  ADMIN: '/admin',
  SCHOOL_ADMIN: '/school',
  INSTRUCTOR: '/instructor',
  STUDENT: '/student',
  PUBLIC_STUDENT: '/public',
} as const

// Routes publiques (accessibles sans authentification)
const PUBLIC_ROUTES = [
  '/',
  '/auth/signin',
  '/auth/error',
  '/auth/signout',
  '/api/auth',
  '/pricing',
  '/about',
  '/contact',
]

// Routes qui ne nécessitent pas de vérification de rôle
const AUTH_ROUTES = ['/auth/signin', '/auth/error', '/auth/signout']

/**
 * Vérifie si une route est publique
 */
function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  )
}

/**
 * Vérifie si l'utilisateur a accès à la route selon son rôle
 */
function hasRouteAccess(pathname: string, userRole: string): boolean {
  // Routes d'authentification accessibles à tous
  if (AUTH_ROUTES.some(route => pathname.startsWith(route))) {
    return true
  }

  // API routes - vérification côté serveur
  if (pathname.startsWith('/api/')) {
    return true
  }

  // Vérifier l'accès selon le rôle
  const rolePrefix = ROLE_ROUTES[userRole as keyof typeof ROLE_ROUTES]
  
  if (!rolePrefix) {
    console.warn(`[Middleware] Rôle inconnu: ${userRole}`)
    return false
  }

  // L'utilisateur peut accéder aux routes de son rôle
  return pathname.startsWith(rolePrefix)
}

/**
 * Obtient l'URL du dashboard selon le rôle
 */
function getDashboardUrl(role: string): string {
  const rolePrefix = ROLE_ROUTES[role as keyof typeof ROLE_ROUTES]
  return rolePrefix ? `${rolePrefix}/dashboard` : '/dashboard'
}

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  console.log(`[Middleware] 📍 ${pathname}`)

  // 0. Récupérer la session dès le début
  const session = await auth()

  // 1. Routes publiques → Accessibles à tous (connectés ou non)
  if (isPublicRoute(pathname)) {
    // Exception : Si connecté sur /auth/signin → Rediriger vers dashboard
    if (pathname.startsWith('/auth/signin') && session?.user) {
      const dashboardUrl = getDashboardUrl(session.user.role)
      console.log(`[Middleware] 🔓 Connecté sur signin → Redirect: ${dashboardUrl}`)
      return NextResponse.redirect(new URL(dashboardUrl, request.url))
    }
    
    console.log('[Middleware] ✅ Route publique → Accès autorisé')
    return NextResponse.next()
  }

  // 2. Vérifier la session pour les routes privées
  if (!session?.user) {
    console.log('[Middleware] 🔒 Non authentifié → Redirection signin')
    const signInUrl = new URL('/auth/signin', request.url)
    signInUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(signInUrl)
  }

  const userRole = session.user.role
  console.log(`[Middleware] 👤 Utilisateur: ${session.user.email} (${userRole})`)

  // 3. Vérifier les permissions d'accès à la route
  if (!hasRouteAccess(pathname, userRole)) {
    console.log(`[Middleware] ⛔ Accès refusé à ${pathname} pour ${userRole}`)
    
    // Rediriger vers le dashboard approprié
    const dashboardUrl = getDashboardUrl(userRole)
    return NextResponse.redirect(new URL(dashboardUrl, request.url))
  }

  console.log('[Middleware] ✅ Accès autorisé')
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match toutes les routes sauf :
     * - _next/static (fichiers statiques)
     * - _next/image (optimisation d'images)
     * - favicon.ico
     * - fichiers d'assets (images, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}