import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
;

export const metadata: Metadata = {
  title: "ASPCT.",
  description: "THE ONLY ONE FASHION",
  icons: {
    icon: "/assets/1.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}