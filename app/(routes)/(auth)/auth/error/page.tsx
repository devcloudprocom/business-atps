import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowRight, RotateCcw } from "lucide-react";
import Image from "next/image";

export default function AuthErrorPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const error = searchParams.error;

  const errorMessages: Record<string, string> = {
    Configuration: "Problème de configuration du serveur d’authentification.",
    AccessDenied: "Accès refusé. Permissions insuffisantes.",
    Verification: "Le lien de vérification a expiré ou a déjà été utilisé.",
    Default: "Une erreur est survenue pendant la connexion.",
  };

  const message = error
    ? errorMessages[error] || errorMessages.Default
    : errorMessages.Default;

  return (
    <div className="w-full">
      {/*<div className="flex justify-center items-center gap-2 mb-4">
        <Image src="/assets/a_logo.png" alt="APTS" width={30} height={30} />
        <span className="text-2xl font-bold">APTS</span>
      </div>*/}
      <div className=" sm:p-8">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-300">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h1 className="font-cal-sans text-[24px] leading-7 text-white">
              Erreur d’authentification
            </h1>
            <p className="mt-2 text-[14px] leading-6 text-white/60">
              {message}
            </p>
            {error ? (
              <p className="mt-2 text-[12px] leading-5 text-white/45">
                Code : <code className="font-mono text-white/70">{error}</code>
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            className="h-11 rounded-full bg-white/10 text-white hover:bg-white/15"
          >
            <Link href="/auth/signin">
              <RotateCcw className="mr-2 h-4 w-4" />
              Réessayer
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="h-11 rounded-full text-white/80 hover:bg-white/5 hover:text-white"
          >
            <Link href="/">
              Retour à l’accueil <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
