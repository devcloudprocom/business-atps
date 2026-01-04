import { signOut } from "@/auth"

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({ redirectTo: "/auth/signin" })
      }}
    >
      <button
        type="submit"
        className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Se déconnecter
      </button>
    </form>
  )
}