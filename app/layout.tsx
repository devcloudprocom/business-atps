import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Cal_Sans, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const generalSans = localFont({
  display: "swap",
  src: [
    {
      path: "../public/fonts/GeneralSans/GeneralSans-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans/GeneralSans-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/GeneralSans/GeneralSans-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans/GeneralSans-LightItalic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/GeneralSans/GeneralSans-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans/GeneralSans-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/GeneralSans/GeneralSans-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans/GeneralSans-SemiboldItalic.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/GeneralSans/GeneralSans-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/GeneralSans/GeneralSans-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-general-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = Cal_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cal-sans",
});

export const metadata: Metadata = {
  title: "ATPS",
  description:
    "ATPS is a platform that provides a range of AI-powered tools and services to help businesses automate their workflows and improve their efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${generalSans.variable} ${inter.variable} ${calSans.variable} font-sans antialiased dark`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
