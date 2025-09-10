import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/next"
import { Databuddy } from '@databuddy/sdk';


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
  description: "Swami Malode's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
           <link rel="icon" href="/logo.png" className="" />
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
