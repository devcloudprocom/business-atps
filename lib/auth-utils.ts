import { Role } from "@/app/generated/prisma"

/**
 * Configuration des routes par rôle
 */
export const ROLE_ROUTES: Record<Role, string> = {
  ADMIN: '/admin',
  SCHOOL_ADMIN: '/school',
  INSTRUCTOR: '/instructor',
  STUDENT: '/student',
  PUBLIC_STUDENT: '/public',
}

/**
 * Retourne l'URL du dashboard selon le rôle
 */
export function getDashboardUrl(role: Role): string {
  return `${ROLE_ROUTES[role]}/dashboard`
}

/**
 * Vérifie si l'utilisateur peut accéder à une route
 */
export function canAccessRoute(userRole: Role, routePath: string): boolean {
  const rolePrefix = ROLE_ROUTES[userRole]
  return routePath.startsWith(rolePrefix)
}

/**
 * Hiérarchie des rôles pour les permissions
 */
export const RoleHierarchy: Record<Role, number> = {
  ADMIN: 5,
  SCHOOL_ADMIN: 4,
  INSTRUCTOR: 3,
  STUDENT: 2,
  PUBLIC_STUDENT: 1,
}

/**
 * Vérifie si un rôle a une permission minimale
 */
export function hasPermission(userRole: Role, minimumRole: Role): boolean {
  return RoleHierarchy[userRole] >= RoleHierarchy[minimumRole]
}

/**
 * Vérifie si un rôle a des permissions admin
 */
export function isAdmin(role: Role): boolean {
  return role === 'ADMIN'
}

/**
 * Vérifie si un rôle a des permissions de gestion d'école
 */
export function isSchoolAdmin(role: Role): boolean {
  return role === 'SCHOOL_ADMIN' || role === 'ADMIN'
}

/**
 * Obtient tous les rôles accessibles par un rôle donné (hiérarchie)
 */
export function getAccessibleRoles(userRole: Role): Role[] {
  const userLevel = RoleHierarchy[userRole]
  return (Object.keys(RoleHierarchy) as Role[]).filter(
    role => RoleHierarchy[role] <= userLevel
  )
}

/**
 * Liste des routes publiques
 */
export const PUBLIC_ROUTES = [
  '/',
  '/auth/signin',
  '/auth/error',
  '/auth/signout',
  '/api/auth',
  '/pricing',
  '/about',
  '/contact',
]

/**
 * Vérifie si une route est publique
 */
export function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  )
}