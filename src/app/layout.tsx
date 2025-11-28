import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sentosakutech",
  description: "Sentosakutech - Studio Web & Mobile Full-stack",
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '32x32',
      },
      {
        url: '/favicon.png',
        sizes: '192x192',
      },
      {
        url: '/favicon.png',
        sizes: '512x512',
      },
    ],
    apple: [
      {
        url: '/favicon.png',
        sizes: '192x192',
      },
    ],
    shortcut: '/favicon.png',
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Sentosaku Tech',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
