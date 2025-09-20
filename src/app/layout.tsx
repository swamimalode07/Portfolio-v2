import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/next";
import { Databuddy } from "@databuddy/sdk";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swami Malode",
  description: "Swami's Portfolio site.",
  keywords: [
    "Frontend Developer",
    "UI/UX Designer",
    "Next.js Portfolio",
    "React Developer",
    "Tailwind CSS",
    "Swami Malode",
  ],
  openGraph: {
    title: "Swami's Portfolio",
    description: "Swami's Portfolio site.",
    url: "https://swamimalode.online",
    siteName: "Swami's Portfolio site",
    images: [
      {
        url: "https://swamimalode.online/opengraphh.jpg",
        width: 1200,
        height: 630,
        alt: "My OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My portfoliosite",
    description: "This is my portfolio.",
    images: ["https://swamimalode.online/opengraphh.jpg"],
    creator: "@SwamiMalode",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
    
        <link rel="canonical" href="https://swamimalode.online" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Swami Malode",
              url: "https://swamimalode.online",
              sameAs: [
                "https://github.com/swamimalode07",
                "https://linkedin.com/in/swamimalode",
                "https://x.com/swamimalode",
              ],
              jobTitle: "Frontend Developer & UI/UX Designer",
              image: "https://swamimalode.online/opengraphh.jpg",
            }),
          }}
        />
      </head>

      <link rel="icon" href="/logo.ico" />

      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}

        <Analytics />

        <Databuddy
          clientId={process.env.NEXT_PUBLIC_DATABUDDY_CLIENT_ID as string}
          trackHashChanges={true}
          trackAttributes={true}
          trackInteractions={true}
          trackEngagement={true}
          trackScrollDepth={true}
          trackExitIntent={true}
          trackBounceRate={true}
          trackWebVitals={true}
          trackErrors={true}
          enableBatching={true}
        />

        <CustomCursor />
      </body>
    </html>
  );
}
