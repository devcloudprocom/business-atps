"use client";

import FormField from "@/components/form/Form-Field";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ResetPasswordInput, resetPasswordSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

export default function ResetPassword() {
  const [updated, setUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordInput) => {
    setIsLoading(true);
    try {
      console.log("Reset password data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Password updated successfully");
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("An error occurred while updating the password");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-5 w-full max-w-sm mx-auto lg:mx-0">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-[24px] leading-7 font-semibold text-foreground">
          Reset your password
        </h1>
        <p className="text-[16px] leading-5 text-muted-foreground">
          Choose a new password for your account.
        </p>
      </div>

      <div className="rounded-sm border border-border bg-white/5 p-4">
        <p className="text-[14px] leading-4.5 text-foreground">Tips:</p>
        <ul className="mt-2 list-disc ml-5 text-[14px] leading-4.5 text-muted-foreground space-y-1">
          <li>Use at least 8 characters.</li>
          <li>Mix letters, numbers and symbols.</li>
          <li>Your reset link may expire after a short time.</li>
        </ul>
      </div>

      {updated ? (
        <div className="rounded-sm border border-border bg-white/5 p-4">
          <p className="text-[14px] leading-4.5 text-foreground">
            Password updated successfully.
          </p>
          <p className="mt-2 text-[14px] leading-4.5 text-muted-foreground">
            You can now log in with your new password.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <FormField
              id="newPassword"
              label="New password"
              error={errors.password?.message || ""}
              register={register}
              name="password"
              type="password"
              placeholder="New password"
              className="w-full"
              disabled={isLoading}
            />

            <FormField
              id="confirmPassword"
              label="Confirm password"
              error={errors.confirmPassword?.message || ""}
              register={register}
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              className="w-full"
              disabled={isLoading}
            />

            <Button
              type="submit"
              className="w-full h-12 text-white rounded-sm border border-border bg-white/5 hover:bg-white/10"
              disabled={isLoading}
            >
              {isLoading ? "Updating password..." : "Update password"}
            </Button>
          </div>
        </form>
      )}

      <div className="flex justify-center text-[16px] text-foreground font-medium gap-2">
        Back to{" "}
        <Link href="/sign-in" className="text-blue-500">
          Log in
        </Link>
      </div>
  </div>
  );
}
