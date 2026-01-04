import { Role } from "@/app/generated/prisma";
import { hasPermission } from "@/lib/auth-utils";

export type SidebarItem = {
  label: string;
  href: string;
  icon?: string;
  permission?: Role;
  subItems?: SidebarItem[];
  badge?: number | string;
};

export type SidebarSection = {
  label: string;
  items: SidebarItem[];
};

// PUBLIC STUDENT SECTIONS
const PUBLIC_STUDENT_SECTIONS: SidebarSection[] = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', href: '/public/dashboard', icon: 'dashboard' },
      { label: 'Cours', href: '/public/courses', icon: 'book' },
      { label: 'Question Bank', href: '/public/question-bank', icon: 'questions' },
    ]
  },
  {
    label: 'Learning',
    items: [
      { label: 'Quiz', href: '/public/quiz', icon: 'quiz' },
      { label: 'Simulateur ATC', href: '/public/atc-simulator', icon: 'atc' },
      { label: 'Examens', href: '/public/exams', icon: 'exam' },
    ]
  },
  {
    label: 'Community',
    items: [
      { label: 'Forum', href: '/public/community', icon: 'forum' },
      { label: 'Blog', href: '/public/blog', icon: 'blog' },
      { label: 'News', href: '/public/news', icon: 'news' },
    ]
  },
  {
    label: 'Account',
    items: [
      { label: 'Profil', href: '/public/profile', icon: 'profile' },
      { label: 'Support', href: '/public/support', icon: 'support' },
    ]
  }
];

// STUDENT SECTIONS (avec Procteo)
const STUDENT_SECTIONS: SidebarSection[] = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', href: '/student/dashboard', icon: 'dashboard' },
      { label: 'Cours', href: '/student/courses', icon: 'book' },
      { label: 'Question Bank', href: '/student/question-bank', icon: 'questions' },
    ]
  },
  {
    label: 'Learning',
    items: [
      { label: 'Quiz', href: '/student/quiz', icon: 'quiz' },
      { label: 'Simulateur ATC', href: '/student/atc-simulator', icon: 'atc' },
      { label: 'Examens Standard', href: '/student/exams', icon: 'exam' },
      { label: 'Examens Surveillés', href: '/student/exams-proctored', icon: 'procteo' },
    ]
  },
  {
    label: 'School',
    items: [
      { label: 'Suivi École', href: '/student/school-progress', icon: 'school' },
    ]
  },
  {
    label: 'Community',
    items: [
      { label: 'Forum', href: '/student/community', icon: 'forum' },
      { label: 'Blog', href: '/student/blog', icon: 'blog' },
      { label: 'News', href: '/student/news', icon: 'news' },
    ]
  },
  {
    label: 'Account',
    items: [
      { label: 'Profil', href: '/student/profile', icon: 'profile' },
      { label: 'Support', href: '/student/support', icon: 'support' },
    ]
  }
];

// INSTRUCTOR SECTIONS
const INSTRUCTOR_SECTIONS: SidebarSection[] = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', href: '/instructor/dashboard', icon: 'dashboard' },
      { label: 'Tableau Temps Réel', href: '/instructor/live-board', icon: 'live' },
    ]
  },
  {
    label: 'Exams Management',
    items: [
      { label: 'Création Examens', href: '/instructor/exams-create', icon: 'create' },
      { label: 'Correction Examens', href: '/instructor/exams-grading', icon: 'grading', badge: 3 },
      { label: 'Suivi Étudiants', href: '/instructor/students-tracking', icon: 'students' },
    ]
  },
  {
    label: 'Account',
    items: [
      { label: 'Profil', href: '/instructor/profile', icon: 'profile' },
    ]
  }
];

// SCHOOL ADMIN SECTIONS
const SCHOOL_ADMIN_SECTIONS: SidebarSection[] = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', href: '/school/dashboard', icon: 'dashboard' },
    ]
  },
  {
    label: 'Management',
    items: [
      { label: 'Gestion Examens', href: '/school/exams-manage', icon: 'exams' },
      { label: 'Config Procteo', href: '/school/procteo-config', icon: 'procteo' },
      { label: 'Gestion Utilisateurs', href: '/school/users-manage', icon: 'users' },
    ]
  },
  {
    label: 'Reports',
    items: [
      { label: 'Rapports Tricherie', href: '/school/reports-cheating', icon: 'reports', badge: 5 },
    ]
  },
  {
    label: 'Account',
    items: [
      { label: 'Profil', href: '/school/profile', icon: 'profile' },
    ]
  }
];

// ADMIN SECTIONS
const ADMIN_SECTIONS: SidebarSection[] = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', href: '/admin/dashboard', icon: 'dashboard' },
    ]
  },
  {
    label: 'Content Management',
    items: [
      { label: 'Upload Questions', href: '/admin/upload', icon: 'upload' },
      { label: 'Gestion Contenus', href: '/admin/content', icon: 'book' },
    ]
  },
  {
    label: 'Users & Schools',
    items: [
      { label: 'Gestion Utilisateurs', href: '/admin/users', icon: 'users' },
      { label: 'Gestion Écoles', href: '/admin/schools', icon: 'schools' },
      { label: 'Abonnements', href: '/admin/subscriptions', icon: 'subscriptions' },
    ]
  },
  {
    label: 'Tools',
    items: [
      { label: 'Notifications', href: '/admin/notifications', icon: 'notification', badge: 7 },
      { label: 'Stats & Rapports', href: '/admin/reports', icon: 'reports' },
      { label: 'Config Système', href: '/admin/config', icon: 'config' },
    ]
  },
  {
    label: 'Support',
    items: [
      { label: 'Support Tickets', href: '/admin/support', icon: 'support', badge: 2 },
    ]
  },
  {
    label: 'Account',
    items: [
      { label: 'Profil', href: '/admin/profile', icon: 'profile' },
    ]
  }
];

// Mapping par rôle
export const SIDEBAR_SECTIONS: Record<Role, SidebarSection[]> = {
  PUBLIC_STUDENT: PUBLIC_STUDENT_SECTIONS,
  STUDENT: STUDENT_SECTIONS,
  INSTRUCTOR: INSTRUCTOR_SECTIONS,
  SCHOOL_ADMIN: SCHOOL_ADMIN_SECTIONS,
  ADMIN: ADMIN_SECTIONS,
};

/**
 * Get filtered sections for role (with permission check)
 */
export function getSidebarSectionsForRole(role: Role): SidebarSection[] {
  return SIDEBAR_SECTIONS[role].map(section => ({
    ...section,
    items: section.items.filter(item => 
      !item.permission || hasPermission(role, item.permission)
    )
  }));
}