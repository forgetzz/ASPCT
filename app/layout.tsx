import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
;

export const metadata: Metadata = {
  title: "ASPCT.",
  description: "THE ONLY ONE FASHION",
  icons: "/assets/1.png"

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <body

      >
        {children}
      </body>
    </html>
  );
}
