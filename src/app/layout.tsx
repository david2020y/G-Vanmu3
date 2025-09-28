import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AppShell } from "@/components/layout/AppShell";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-alt" });

export const metadata: Metadata = {
  title: "U-TRACK | 全球学术规划与科研成长平台",
  description:
    "U-TRACK 为学生提供科研实验室、迷你大学学习中心、升学规划与全球资源，帮助青少年精准规划未来路径。",
  metadataBase: new URL("https://u-track.example"),
  openGraph: {
    title: "U-TRACK | 全球学术规划与科研成长平台",
    description:
      "U-TRACK 为学生提供科研实验室、迷你大学学习中心、升学规划与全球资源，帮助青少年精准规划未来路径。",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background text-foreground antialiased",
          inter.variable,
          manrope.variable,
        )}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
