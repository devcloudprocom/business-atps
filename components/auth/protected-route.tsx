'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Role } from "@/app/generated/prisma"
import { getDashboardUrl } from "@/lib/auth-utils"

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles?: Role[]
  requireAuth?: boolean
}

/**
 * Composant pour protéger les routes côté client
 * Usage: <ProtectedRoute allowedRoles={['ADMIN', 'SCHOOL_ADMIN']}>...</ProtectedRoute>
 */
export function ProtectedRoute({ 
  children, 
  allowedRoles,
  requireAuth = true 
}: ProtectedRouteProps) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return

    // Vérifier l'authentification
    if (requireAuth && !session) {
      router.push('/auth/signin')
      return
    }

    // Vérifier les rôles si spécifiés
    if (allowedRoles && session?.user) {
      const userRole = session.user.role
      
      if (!allowedRoles.includes(userRole)) {
        console.warn(`[ProtectedRoute] Accès refusé pour ${userRole}`)
        const dashboardUrl = getDashboardUrl(userRole)
        router.push(dashboardUrl)
      }
    }
  }, [session, status, router, allowedRoles, requireAuth])

  // Loading state
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    )
  }

  // Non authentifié
  if (requireAuth && !session) {
    return null
  }

  // Rôle non autorisé
  if (allowedRoles && session?.user) {
    if (!allowedRoles.includes(session.user.role)) {
      return null
    }
  }

  return <>{children}</>
}

/**
 * HOC pour protéger une page
 */
export function withAuth<P extends object>(
  Component: React.ComponentType<P>,
  allowedRoles?: Role[]
) {
  return function ProtectedComponent(props: P) {
    return (
      <ProtectedRoute allowedRoles={allowedRoles}>
        <Component {...props} />
      </ProtectedRoute>
    )
  }
}