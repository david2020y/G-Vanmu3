import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or Noto Sans SC
import "./globals.css";
import Header from "@/components/Header"; // Assuming Header component exists
import Footer from "@/components/Footer"; // Assuming Footer component exists
import { cn } from "@/lib/utils"; // Shadcn utility

// If you prefer Noto Sans SC:
// import { Noto_Sans_SC } from "next/font/google";
// const noto = Noto_Sans_SC({ subsets: ["latin"], weight: ["300", "400", "700"] });

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" }); // Setup for Tailwind

export const metadata: Metadata = {
  title: "梵慕学院 - 禅修与生活美学",
  description: "在梵慕学院，探索东方禅修智慧与现代生活美学的融合",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      {/* Use cn utility from Shadcn for merging classes */}
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable // Apply font variable
          // noto.className // Or apply Noto Sans SC classname
        )}>
        <Header /> {/* Add Header */}
        <main className="flex-grow">{children}</main> {/* Page content */}
        <Footer /> {/* Add Footer */}
      </body>
    </html>
  );
}