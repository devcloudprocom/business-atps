"use client";

import FormField from "@/components/form/Form-Field";
import { Button } from "@/components/ui/button";
import { RegisterInput, registerSchema } from "@/lib/validation/auth";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "client",
    },
  });

  const onSubmit = async (data: RegisterInput) => {
    setIsLoading(true);
    try {
      console.log("Register data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Account created successfully");
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("An error occurred while creating your account");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-5 w-full max-w-sm mx-auto lg:mx-0">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-[24px] leading-7 font-semibold text-foreground">
          Create your account
        </h1>
        <p className="text-[16px] leading-5 text-muted-foreground">
          Connect to ATS with:
        </p>
      </div>

      <div className="w-full">
        <div className="w-full hover:bg-white/5 bg-white text-black hover:text-white cursor-pointer transition-colors flex items-center justify-center gap-2 h-12 rounded-sm border border-border text-[14px] leading-4">
          <FaGoogle className="w-4 h-4" /> Google
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-2">
        <span className="w-full h-px bg-border" />
        <p className="text-[12px] leading-5 w-150 text-muted-foreground uppercase text-center">
          Or continue with Email
        </p>
        <span className="w-full h-px bg-border" />
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <FormField
                id="name"
                label="Full name"
                error={errors.name?.message || ""}
                register={register}
                name="name"
                type="text"
                placeholder="Full name"
                className="w-full"
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col gap-2">
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
            </div>

            <div className="flex flex-col gap-2">
              <FormField
                id="password"
                label="Password"
                error={errors.password?.message || ""}
                register={register}
                name="password"
                type="password"
                placeholder="Password"
                className="w-full"
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col gap-2">
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
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="w-full h-12 text-white rounded-sm border border-border bg-white/5 hover:bg-white/10"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </div>

            <div className="flex justify-center text-[16px] text-foreground font-medium gap-2">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-blue-500">
                Log in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
