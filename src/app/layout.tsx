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
  title: "Sentosaku Tech - Studio Web & Mobile Full-Stack",
  description: "Kami rancang strategi, desain, hingga kode agar setiap rilis web atau mobile terasa mulus, stabil, dan siap tumbuh.",
  metadataBase: new URL('https://sentosaku.com'),
  keywords: ["web development", "mobile app", "full-stack", "startup"],
  authors: [{ name: "Sentosaku Tech" }],
  openGraph: {
    title: "Sentosaku Tech - Studio Web & Mobile Full-Stack",
    description: "Kami rancang strategi, desain, hingga kode agar setiap rilis web atau mobile terasa mulus, stabil, dan siap tumbuh.",
    type: "website",
    url: "https://sentosaku.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sentosaku Tech - Web & Mobile Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentosaku Tech - Studio Web & Mobile",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
