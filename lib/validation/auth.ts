import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "The password must contain at least 8 characters")
  .regex(/[A-Z]/, "The password must contain at least one uppercase letter")
  .regex(/[a-z]/, "The password must contain at least one lowercase letter")
  .regex(/[0-9]/, "The password must contain at least one number")
  .regex(
    /[^A-Za-z0-9]/,
    "The password must contain at least one special character"
  );

export const loginSchema = z.object({
  email: z.string().email("The email is required"),
  password: passwordSchema,
});

export const registerSchema = z
  .object({
    name: z.string().min(2, "The name must contain at least 2 characters"),
    email: z.string().email("The email is required"),
    password: passwordSchema,
    confirmPassword: z.string(),
    role: z.enum(["client", "admin", "employee"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "The passwords do not match",
    path: ["confirmPassword"],
  });

export const verificationSchema = z.object({
  email: z
    .string()
    .min(1, { message: "The email is required" })
    .email({ message: "The email is required" })
    .toLowerCase()
    .trim(),
});

export const resetPasswordSchema = z.object({
  password: passwordSchema,
  confirmPassword: passwordSchema,
}).refine((data) => data.password === data.confirmPassword, {
  message: "The passwords do not match",
  path: ["confirmPassword"],
});

export const registerAdminSchema = z
  .object({
    name: z.string().min(2, "The name must contain at least 2 characters"),
    email: z.string().email("Invalid email"),
    password: passwordSchema,
    confirmPassword: passwordSchema,
    role: z.literal("admin"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "The passwords do not match",
    path: ["confirmPassword"],
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type VerificationFormData = z.infer<typeof verificationSchema>;
export type RegisterAdminInput = z.infer<typeof registerAdminSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
