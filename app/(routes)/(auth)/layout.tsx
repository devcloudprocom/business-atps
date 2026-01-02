import Image from "next/image";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dark bg-background text-foreground">
      <div className="w-full min-h-screen lg:h-screen lg:overflow-hidden grid grid-cols-1 lg:grid-cols-3 bg-background">
        <div className="md:flex flex-col bg-[#131313] hidden sm:flex-row lg:flex-row items-center justify-center gap-6 sm:gap-10 px-6 py-10 lg:px-0 lg:py-0 lg:col-span-1">
          <div className="w-[160px] sm:w-[200px] h-full items-center justify-center flex">
            <Image
              src="/assets/img_log.png"
              alt="Fluence AI"
              width={200}
              height={200}
              className="object-cover h-full w-full"
            />
          </div>
          <h1 className="text-[24px] sm:text-[36px] leading-[30px] sm:leading-[40px] font-bold text-foreground/90 text-center sm:text-left">
            Recover your ATPS access.
          </h1>
        </div>

        <div className="bg-background lg:h-full flex flex-col lg:flex-row gap-[50px] px-6 sm:px-10 lg:px-20 py-8 sm:py-10 lg:col-span-2">
          {children}
        </div>
      </div>
    </div>
  );
}
