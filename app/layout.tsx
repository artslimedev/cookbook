import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-orange-200 text-foreground">
        <nav className="flex px-16 pt-4 pb-0 justify-between items-center bg-orange-200 text-foreground sticky top-0 z-10">
          <div className="w-1/2 text-3xl">
            <Link href={"/"} className="hidden md:block">
              <span className="font-bold">Slime</span>
              <span className="font-normal"> Cookbook</span>
            </Link>
          </div>
          <div className="w-1/2 text-base flex justify-end items-center gap-x-8 font-bold">
            <Link href={"/"} className="hidden md:block">
              <span>HOME</span>
            </Link>
            <Link href={"/recipes"} className="hidden md:block">
              <span>RECIPES</span>
            </Link>
            <Link href={"/search"} className="hidden md:block">
              <span>SEARCH</span>
            </Link>
            <Link href={"/about"} className="hidden md:block">
              <span>ABOUT</span>
            </Link>
          </div>
        </nav>
        <main className="lg:p-16 lg:pt-0">{children}</main>
      </body>
    </html>
  );
}
