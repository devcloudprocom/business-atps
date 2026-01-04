import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { KeyRound, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="w-full">
      {/*<div className="flex justify-center items-center gap-2 mb-4">
        <Image src="/assets/a_logo.png" alt="APTS" width={30} height={30} />
        <span className="text-2xl font-bold">APTS</span>
      </div>*/}
      <div className=" sm:p-8">
        <div className="flex flex-col items-start gap-2">
          <div className="inline-flex items-center gap-2 text-white/80">
            <ShieldCheck className="h-4 w-4 text-[rgb(0,230,153)]" />
            <span className="text-[12px] tracking-wide">SECURE SIGN IN</span>
          </div>
          <h1 className="font-cal-sans text-[28px] leading-8 text-white">
            Connexion à ATPS
          </h1>
          <p className="text-[14px] leading-6 text-white/60">
            Connectez-vous avec Keycloak pour continuer.
          </p>
        </div>

        <form
          className="mt-8"
          action={async () => {
            "use server";
            await signIn("keycloak", { redirectTo: "/" });
          }}
        >
          <Button className="w-full h-12 rounded-full bg-[rgb(0,230,153)] text-black hover:bg-[rgb(0,230,153)]/90">
            <KeyRound className="mr-2 h-4 w-4" />
            Se connecter avec Keycloak
          </Button>
        </form>

        <p className="mt-6 text-[12px] leading-5 text-white/45">
          Astuce : si vous avez un souci d’accès, contactez votre administrateur
          ou réessayez plus tard.
        </p>
      </div>
    </div>
  );
}
