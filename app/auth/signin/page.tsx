import { signIn } from "@/auth"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-lg border p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Connexion</h2>
          <p className="mt-2 text-gray-600">
            Connectez-vous avec Keycloak
          </p>
        </div>
        
        <form
          action={async () => {
            "use server"
            await signIn("keycloak", { redirectTo: "/" })
          }}
        >
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Se connecter avec Keycloak
          </button>
        </form>
      </div>
    </div>
  )
}