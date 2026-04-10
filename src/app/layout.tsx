import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { WebVitals } from "./web-vitals";
import { Analytics } from "./analytics";
import { SentryInit } from "./sentry";
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
  metadataBase: new URL('https://sentosakutech.com'),
  keywords: ["web development", "mobile app", "full-stack", "startup"],
  authors: [{ name: "Sentosaku Tech" }],
  openGraph: {
    title: "Sentosaku Tech - Studio Web & Mobile Full-Stack",
    description: "Kami rancang strategi, desain, hingga kode agar setiap rilis web atau mobile terasa mulus, stabil, dan siap tumbuh.",
    type: "website",
    url: "https://sentosakutech.com",
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
  alternates: {
    canonical: 'https://sentosakutech.com',
    languages: {
      'id': 'https://sentosakutech.com',
      'en': 'https://sentosakutech.com/en',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <SentryInit />
        <WebVitals />
        <Analytics />
        {/* Structured Data / JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Sentosaku Tech",
                "url": "https://sentosakutech.com",
                "logo": "https://sentosakutech.com/logo_bg_color.png",
                "description": "Kami rancang strategi, desain, hingga kode agar setiap rilis web atau mobile terasa mulus, stabil, dan siap tumbuh.",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "adiyatmaharis21@gmail.com",
                  "contactType": "customer service"
                },
                "sameAs": [
                  "https://linkedin.com/company/sentosakutech",
                  "https://instagram.com/sentosakutech",
                  "https://twitter.com/sentosakutech"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Sentosaku Tech",
                "url": "https://sentosakutech.com",
                "inLanguage": "id",
                "description": "Studio Web & Mobile Full-Stack"
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Beranda",
                    "item": "https://sentosakutech.com"
                  }
                ]
              }
            ])
          }}
        />
      </body>
    </html>
  );
}
