import { Role } from "@/app/generated/prisma"
import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: Role
    } & DefaultSession["user"]
    accessToken?: string
  }
  
  interface User {
    role?: Role
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId?: string
    role?: Role
    accessToken?: string
    refreshToken?: string
    idToken?: string
  }
}