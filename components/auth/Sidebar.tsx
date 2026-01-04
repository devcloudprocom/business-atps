'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { getSidebarSectionsForRole } from "@/constants/sidebar-items";
import { Role } from "@/app/generated/prisma";
import { 
  LayoutDashboard, 
  BookOpen, 
  HelpCircle, 
  Brain, 
  Radio, 
  FileText, 
  Users, 
  MessageSquare, 
  Newspaper,
  User,
  HeadphonesIcon,
  GraduationCap,
  School,
  CheckSquare,
  UserCheck,
  Monitor,
  Upload,
  Settings,
  BarChart3,
  Bell,
  Mail,
  Code,
  ChevronDown,
  ChevronRight,
  LogOut,
  Shield
} from "lucide-react";
import { useState } from "react";

// Mapping des icônes
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  dashboard: LayoutDashboard,
  book: BookOpen,
  questions: HelpCircle,
  quiz: Brain,
  atc: Radio,
  exam: FileText,
  forum: MessageSquare,
  blog: Newspaper,
  news: Newspaper,
  profile: User,
  support: HeadphonesIcon,
  procteo: Shield,
  school: School,
  grading: CheckSquare,
  students: UserCheck,
  create: FileText,
  live: Monitor,
  exams: FileText,
  users: Users,
  reports: BarChart3,
  upload: Upload,
  subscriptions: GraduationCap,
  schools: School,
  config: Settings,
  notification: Bell,
  inbox: Mail,
  integration: Code,
};

interface SidebarProps {
  collapsed?: boolean;
}

export default function Sidebar({ collapsed = false }: SidebarProps) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>(['overview']);

  if (!session?.user) return null;

  const sections = getSidebarSectionsForRole(session.user.role as Role);

  const toggleSection = (sectionLabel: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionLabel)
        ? prev.filter(s => s !== sectionLabel)
        : [...prev, sectionLabel]
    );
  };

  const isActive = (href: string) => pathname === href;

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="w-5 h-5" /> : null;
  };

  return (
    <aside className="flex flex-col h-screen bg-white border-r border-gray-200 w-64">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">MA</span>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">MyATPS</h2>
            <p className="text-xs text-gray-500">Aviation Training</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-6">
        {sections.map((section, sectionIndex) => {
          const isExpanded = expandedSections.includes(section.label);
          
          return (
            <div key={sectionIndex}>
              {/* Section Header */}
              {section.label && (
                <button
                  onClick={() => toggleSection(section.label)}
                  className="flex items-center justify-between w-full mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700 transition-colors"
                >
                  <span>{section.label}</span>
                  {section.items.length > 3 && (
                    isExpanded ? 
                      <ChevronDown className="w-3 h-3" /> : 
                      <ChevronRight className="w-3 h-3" />
                  )}
                </button>
              )}

              {/* Section Items */}
              {isExpanded && (
                <ul className="space-y-1">
                  {section.items.map((item, itemIndex) => {
                    const active = isActive(item.href);
                    
                    return (
                      <li key={itemIndex}>
                        <Link
                          href={item.href}
                          className={`
                            flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all
                            ${active 
                              ? 'bg-blue-50 text-blue-600' 
                              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                            }
                          `}
                        >
                          <div className="flex items-center space-x-3">
                            {getIcon(item.icon)}
                            <span>{item.label}</span>
                          </div>
                          
                          {/* Badge de notification */}
                          {item.badge && (
                            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </Link>

                        {/* Sub-items */}
                        {item.subItems && (
                          <ul className="ml-8 mt-1 space-y-1">
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={subItem.href}
                                  className={`
                                    block px-3 py-1.5 rounded-lg text-sm transition-colors
                                    ${isActive(subItem.href)
                                      ? 'text-blue-600 bg-blue-50'
                                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }
                                  `}
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer avec profil utilisateur */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {session.user.name?.split(' ')[0]?.[0]}{session.user.name?.split(' ')[1]?.[0]}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {session.user.name}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {session.user.email}
            </p>
          </div>
        </div>
        
        <button
          onClick={() => signOut()}
          className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}