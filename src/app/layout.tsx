import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vidraçaria Suprema",
  description: "A melhor vidraçaria do Brasil",
  authors: [
    {
      name: "Gustavo Silva",
      url: "https://www.linkedin.com/in/gusttavosilva/",
    },
  ],
  creator: "Gustavo Silva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background text-foreground transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
