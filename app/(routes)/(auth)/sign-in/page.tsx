"use client";

import FormField from "@/components/form/Form-Field";
import { Button } from "@/components/ui/button";
import { LoginInput, loginSchema } from "@/lib/validation/auth";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginInput) => {
    setIsLoading(true);
    try {
      console.log("Login data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Logged in successfully");
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("An error occurred while logging in");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <Link href="/">
          <Button
            variant="outline"
            className="bg-transparent border-border text-foreground text-[14px] leading-[16px] hover:bg-white/5"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Home
          </Button>
        </Link>
      </div>
      <div className="flex flex-col justify-center gap-5 w-full max-w-sm mx-auto lg:mx-0">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-[24px] leading-[28px] font-semibold text-foreground">
            Log in to ATPS
          </h1>
          <p className="text-[16px] leading-[20px] text-muted-foreground">
            Connect to ATS with:
          </p>
        </div>
        <div className="w-full">
          <Button variant="outline" className="w-full hover:bg-white/5">
            <FaGoogle className="w-4 h-4" /> Google
          </Button>
        </div>
        <div className="flex w-full items-center justify-center gap-2">
          <span className="w-full h-px bg-border" />
          <p className="text-[12px] leading-[20px] w-150 text-muted-foreground uppercase text-center">
            Or continue with Email
          </p>
          <span className="w-full h-px bg-border" />
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
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
                  labelRight={
                    <Link
                      href="/forgot-password"
                      className="text-[14px] leading-[16px] text-blue-500"
                    >
                      Forgot password?
                    </Link>
                  }
                  error={errors.password?.message || ""}
                  register={register}
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full"
                  disabled={isLoading}
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="w-full h-12 rounded-sm border border-border bg-white/5 hover:bg-white/10"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </div>
              <div className="flex justify-center text-[16px] text-foreground font-medium gap-2">
                New to ATPS?{" "}
                <Link href="/sign-up" className="text-blue-500">
                  Sign up for an account
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
