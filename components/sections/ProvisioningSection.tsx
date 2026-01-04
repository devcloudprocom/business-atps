import Link from "next/link";
import { ArrowRight } from "lucide-react";

const integrationChips = [
  "Keycloak / SSO",
  "Moodle",
  "Google Classroom",
  "Microsoft Teams",
  "Canvas",
  "CSV / Excel",
  "Webhooks",
  "API",
];

export function ProvisioningSection() {
  return (
    <section className="relative w-full bg-black text-white">
      {/* subtle background wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.14),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(0,230,153,0.10),transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-0 py-20 sm:py-24 md:py-28">
        {/* Instant setup */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2 className="font-cal-sans text-[56px] leading-[1.02] sm:text-[72px] tracking-tight">
              <span className="block">Instant</span>
              <span className="block">Exam Setup</span>
            </h2>
            <p className="mt-6 text-[16px] leading-6 text-white/60">
              No waiting. No configuration.
            </p>
          </div>

          <div className="relative">
            <div className="flex justify-end">
              <span className="text-[12px] leading-5 text-white/55">
                Ready in 300ms
              </span>
            </div>

            {/* connection bar */}
            <div className="mt-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[rgb(0,230,153)] shadow-[0_0_18px_rgba(0,230,153,0.35)]" />
                <span className="truncate font-mono text-[13px] leading-5 text-white/80">
                  session://atps/exams/primary
                </span>
              </div>
            </div>

            {/* pixel/dot field */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative h-[260px] w-full">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.50)_1px,transparent_1px)] bg-size-[7px_7px] opacity-70" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(0,230,153,0.20),transparent_55%),radial-gradient(circle_at_70%_65%,rgba(59,130,246,0.22),transparent_60%)]" />
                <div className="absolute inset-0 mask-[radial-gradient(ellipse_at_center,black_35%,transparent_70%)] bg-black/60" />
              </div>
            </div>
          </div>
        </div>

        {/* Works with your stack */}
        <div className="mt-20 sm:mt-24 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2 className="font-cal-sans text-[56px] leading-[1.02] sm:text-[72px] tracking-tight">
              <span className="block">Works with</span>
              <span className="block">your stack</span>
            </h2>
            <p className="mt-6 text-[14px] leading-6 text-white/55 max-w-md">
              Plug ATPS into your campus tools in minutes—SSO, LMS, exports, and
              automation—without adding code to your app.
            </p>
            <Link
              href="#"
              className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-white/90 hover:text-white"
            >
              See integrations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {/* integrations header */}
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10">
              <div className="text-[12px] leading-5 font-medium text-white/85">
                Integrations
              </div>
              <div className="text-[12px] leading-5 text-white/45">
                Connect once. Works everywhere.
              </div>
            </div>

            {/* chips + capabilities (no code) */}
            <div className="px-6 py-6">
              <div className="flex flex-wrap gap-2">
                {integrationChips.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] leading-5 text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="text-[12px] font-medium text-white/85">
                    Single Sign-On
                  </div>
                  <div className="mt-1 text-[12px] leading-5 text-white/55">
                    Secure access with Keycloak/SAML and role-based policies.
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="text-[12px] font-medium text-white/85">
                    LMS & Exports
                  </div>
                  <div className="mt-1 text-[12px] leading-5 text-white/55">
                    Sync rosters, publish grades, and export results anytime.
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="text-[12px] font-medium text-white/85">
                    Automation
                  </div>
                  <div className="mt-1 text-[12px] leading-5 text-white/55">
                    Webhooks for events like submissions, flags, and completion.
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="text-[12px] font-medium text-white/85">
                    Controls
                  </div>
                  <div className="mt-1 text-[12px] leading-5 text-white/55">
                    Time limits, access rules, and audit trails per session.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

