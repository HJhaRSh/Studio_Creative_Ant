import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import dynamic from "next/dynamic";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

// Dynamically import the video loader to avoid SSR issues
const VideoIntroBackground = dynamic(
  () => import("@/components/VideoIntroBackground"),
  { 
    ssr: false,
    loading: () => null
  }
);



export const metadata: Metadata = {
  title: "Studio Creative Ant | Architecture & Design Practice",
  description: "Studio Creative Ant is an architecture and design practice founded in 2020 by Ar. Anket Tathed, driven by the pursuit of meaningful, human-centered spaces.",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-black relative" style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        <VideoIntroBackground />
        <div style={{ visibility: 'hidden' }}>
          <Navbar />
        </div>
        <main className="relative z-10" style={{ position: 'relative', zIndex: 10, visibility: 'hidden' }}>{children}</main>
        <div style={{ visibility: 'hidden' }}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
