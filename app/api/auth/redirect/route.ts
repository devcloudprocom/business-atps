import { auth } from "@/auth"
import { getDashboardUrl } from "@/lib/auth-utils"
import { redirect } from "next/navigation"

export async function GET(request: Request) {
  const session = await auth()
  if (!session) {
    redirect('/auth/signin')
  }

  const { searchParams } = new URL(request.url)
  let callbackUrl = searchParams.get('callbackUrl') || getDashboardUrl(session.user.role)

  if (callbackUrl === '/') {
    callbackUrl = getDashboardUrl(session.user.role)
  }

  console.log(`🚀 Redirection vers: ${callbackUrl} (Rôle: ${session.user.role})`)
  redirect(callbackUrl)
}