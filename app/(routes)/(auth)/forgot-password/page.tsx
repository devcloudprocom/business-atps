"use client";

import FormField from "@/components/form/Form-Field";
import { Button } from "@/components/ui/button";
import {
  VerificationFormData,
  verificationSchema,
} from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ForgotPassword() {
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerificationFormData>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: VerificationFormData) => {
    setIsLoading(true);
    try {
      console.log("Verification data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Verification email sent successfully");
    } catch (error) {
      console.error("Error sending verification email:", error);
      toast.error("An error occurred while sending the verification email");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-5 w-full max-w-sm mx-auto lg:mx-0">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-[24px] leading-7 font-semibold text-foreground">
          Forgot your password?
        </h1>
        <p className="text-[16px] leading-5 text-muted-foreground">
          Enter your email and we&apos;ll send you a reset link.
        </p>
      </div>

      {sent ? (
        <div className="rounded-sm border border-border bg-white/5 p-4">
          <p className="text-[14px] leading-4.5 text-foreground">
            If an account exists for this email, we just sent a password reset
            link.
          </p>
          <p className="mt-2 text-[14px] leading-4.5 text-muted-foreground">
            Didn’t receive it? Check spam or try again.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <FormField
              id="email"
              label="Email"
              error={errors.email?.message || ""}
              register={register}
              name="email"
              type="email"
              placeholder="Email"
              className="w-full"
              disabled={isLoading}
            />

            <Button
              type="submit"
              className="w-full h-12 rounded-sm text-white border border-border bg-white/5 hover:bg-white/10"
              disabled={isLoading}
            >
              {isLoading ? "Sending email..." : "Send email"}
            </Button>
          </div>
        </form>
      )}

      <div className="flex justify-center text-[16px] text-foreground font-medium gap-2">
        Remembered your password?{" "}
        <Link href="/sign-in" className="text-blue-500">
          Log in
        </Link>
      </div>

      <div className="flex justify-center text-[14px] text-muted-foreground font-medium gap-2">
        <Link href="/reset-password" className="underline underline-offset-4">
          I already have a reset link
        </Link>
      </div>
    </div>
  );
}
