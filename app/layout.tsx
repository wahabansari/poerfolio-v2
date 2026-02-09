import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseGlow from "@/components/MouseGlow";
import { Analytics } from "@vercel/analytics/next";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wahab Ansari - Portfolio | Software Engineer",
  description: "A Portfolio for Wahab Ansari - Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <MouseGlow />
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
