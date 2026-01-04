import Link from "next/link"

export default function AuthErrorPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  const error = searchParams.error

  const errorMessages: Record<string, string> = {
    Configuration: "Il y a un problème de configuration du serveur d'authentification.",
    AccessDenied: "Accès refusé. Vous n'avez pas les permissions nécessaires.",
    Verification: "Le lien de vérification a expiré ou a déjà été utilisé.",
    Default: "Une erreur s'est produite lors de la connexion.",
  }

  const message = error ? errorMessages[error] || errorMessages.Default : errorMessages.Default

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            
            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              Erreur d'authentification
            </h2>
            
            <p className="mt-2 text-gray-600">{message}</p>
            
            {error && (
              <p className="mt-2 text-sm text-gray-500">
                Code d'erreur : <code className="font-mono">{error}</code>
              </p>
            )}
          </div>
          
          <div className="mt-6">
            <Link
              href="/auth/signin"
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Réessayer
            </Link>
          </div>
          
          <div className="mt-4 text-center">
            <Link
              href="/"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}