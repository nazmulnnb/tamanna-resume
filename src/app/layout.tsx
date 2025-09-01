import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tamanna Akter - Full Stack Developer",
  description: "Professional portfolio of Tamanna Akter, a versatile Full Stack Developer specializing in modern web applications, AI integration, and innovative solutions.",
  keywords: "Full Stack Developer, React, Next.js, Laravel, PHP, Python, AI, Web Development, Bangladesh, Japan",
  authors: [{ name: "Tamanna Akter" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
