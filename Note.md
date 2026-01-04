<!-- Using into Layouts -->
// ============================================
// app/admin/layout.tsx
// ============================================
import { requireAdmin } from "@/lib/server-auth"
import { AdminNav } from "@/components/admin/AdminNav"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await requireAdmin()
  
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav user={session.user} />
      <main className="container mx-auto py-8">
        {children}
      </main>
    </div>
  )
}

// ============================================
// app/school/layout.tsx
// ============================================
import { requireSchoolAdmin } from "@/lib/server-auth"
import { SchoolNav } from "@/components/school/SchoolNav"

export default async function SchoolLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await requireSchoolAdmin()
  
  return (
    <div className="min-h-screen bg-gray-50">
      <SchoolNav user={session.user} />
      <main className="container mx-auto py-8">
        {children}
      </main>
    </div>
  )
}

// ============================================
// app/instructor/layout.tsx
// ============================================
import { requireAuth } from "@/lib/server-auth"
import { InstructorNav } from "@/components/instructor/InstructorNav"

export default async function InstructorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await requireAuth(['INSTRUCTOR'])
  
  return (
    <div className="min-h-screen bg-gray-50">
      <InstructorNav user={session.user} />
      <main className="container mx-auto py-8">
        {children}
      </main>
    </div>
  )
}

// ============================================
// app/student/layout.tsx
// ============================================
import { requireAuth } from "@/lib/server-auth"
import { StudentNav } from "@/components/student/StudentNav"

export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await requireAuth(['STUDENT', 'PUBLIC_STUDENT'])
  
  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNav user={session.user} />
      <main className="container mx-auto py-8">
        {children}
      </main>
    </div>
  )
}

// ============================================
// app/public/layout.tsx
// ============================================
import { requireAuth } from "@/lib/server-auth"
import { PublicNav } from "@/components/public/PublicNav"

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await requireAuth(['PUBLIC_STUDENT'])
  
  return (
    <div className="min-h-screen bg-gray-50">
      <PublicNav user={session.user} />
      <main className="container mx-auto py-8">
        {children}
      </main>
    </div>
  )
}

<!-- Using into pages -->
// ============================================
// app/admin/dashboard/page.tsx - Server Component
// ============================================
import { requireAdmin } from "@/lib/server-auth"

export default async function AdminDashboardPage() {
  const session = await requireAdmin()
  
  return (
    <div>
      <h1>Dashboard Admin</h1>
      <p>Bienvenue {session.user.name}</p>
      {/* Votre contenu admin */}
    </div>
  )
}

// ============================================
// app/school/dashboard/page.tsx - Server Component
// ============================================
import { requireSchoolAdmin } from "@/lib/server-auth"

export default async function SchoolDashboardPage() {
  const session = await requireSchoolAdmin()
  
  return (
    <div>
      <h1>Dashboard École</h1>
      <p>Bienvenue {session.user.name}</p>
      {/* Votre contenu school admin */}
    </div>
  )
}

// ============================================
// app/instructor/dashboard/page.tsx - Server Component
// ============================================
import { requireAuth } from "@/lib/server-auth"

export default async function InstructorDashboardPage() {
  const session = await requireAuth(['INSTRUCTOR'])
  
  return (
    <div>
      <h1>Dashboard Instructeur</h1>
      <p>Bienvenue {session.user.name}</p>
      {/* Votre contenu instructeur */}
    </div>
  )
}

// ============================================
// app/student/dashboard/page.tsx - Server Component
// ============================================
import { requireAuth } from "@/lib/server-auth"

export default async function StudentDashboardPage() {
  const session = await requireAuth(['STUDENT', 'PUBLIC_STUDENT'])
  
  return (
    <div>
      <h1>Dashboard Étudiant</h1>
      <p>Bienvenue {session.user.name}</p>
      <p>Type: {session.user.role}</p>
      {/* Votre contenu étudiant */}
    </div>
  )
}

// ============================================
// app/public/dashboard/page.tsx - Server Component
// ============================================
import { requireAuth } from "@/lib/server-auth"

export default async function PublicStudentDashboardPage() {
  const session = await requireAuth(['PUBLIC_STUDENT'])
  
  return (
    <div>
      <h1>Dashboard Étudiant Public</h1>
      <p>Bienvenue {session.user.name}</p>
      {/* Votre contenu étudiant public */}
    </div>
  )
}

// ============================================
// app/admin/users/page.tsx - Client Component Example
// ============================================
'use client'

import { ProtectedRoute } from "@/components/auth/ProtectedRoute"

export default function AdminUsersPage() {
  return (
    <ProtectedRoute allowedRoles={['ADMIN']}>
      <div>
        <h1>Gestion des utilisateurs</h1>
        {/* Votre contenu */}
      </div>
    </ProtectedRoute>
  )
}

// ============================================
// app/school/settings/page.tsx - Mixed Example
// ============================================
import { requireSchoolAdmin } from "@/lib/server-auth"
import { SchoolSettingsForm } from "./SchoolSettingsForm"

export default async function SchoolSettingsPage() {
  const session = await requireSchoolAdmin()
  
  return (
    <div>
      <h1>Paramètres de l'école</h1>
      <SchoolSettingsForm 
        userRole={session.user.role}
        userId={session.user.id}
      />
    </div>
  )
}


<!-- Utilisation into api -->
// ============================================
// app/api/admin/users/route.ts
// ============================================
import { NextRequest, NextResponse } from "next/server"
import { requireAdmin } from "@/lib/server-auth"

export async function GET(request: NextRequest) {
  try {
    // Vérifier que l'utilisateur est admin
    const session = await requireAdmin()
    
    // Logique métier...
    const users = [] // Votre logique ici
    
    return NextResponse.json({ 
      success: true,
      users,
      requestedBy: session.user.email
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    )
  }
}

// ============================================
// app/api/school/courses/route.ts
// ============================================
import { NextRequest, NextResponse } from "next/server"
import { requireSchoolAdmin } from "@/lib/server-auth"

export async function POST(request: NextRequest) {
  try {
    // Vérifier que l'utilisateur est school admin ou admin
    const session = await requireSchoolAdmin()
    
    const body = await request.json()
    
    // Logique de création de cours...
    
    return NextResponse.json({ 
      success: true,
      message: "Course created",
      createdBy: session.user.email
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    )
  }
}

// ============================================
// app/api/student/enrollment/route.ts
// ============================================
import { NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/server-auth"

export async function GET(request: NextRequest) {
  try {
    // Autoriser uniquement les étudiants
    const session = await requireAuth(['STUDENT', 'PUBLIC_STUDENT'])
    
    // Récupérer les inscriptions de l'étudiant
    const enrollments = [] // Votre logique ici
    
    return NextResponse.json({ 
      success: true,
      enrollments,
      studentId: session.user.id
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    )
  }
}

// ============================================
// app/api/public/courses/route.ts
// ============================================
import { NextRequest, NextResponse } from "next/server"
import { getOptionalSession } from "@/lib/server-auth"

export async function GET(request: NextRequest) {
  // Route publique - session optionnelle
  const session = await getOptionalSession()
  
  // Logique accessible à tous
  const publicCourses = [] // Votre logique ici
  
  return NextResponse.json({ 
    success: true,
    courses: publicCourses,
    isAuthenticated: !!session
  })
}