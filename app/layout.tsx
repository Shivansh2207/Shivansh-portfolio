import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Anton, Bangers, IBM_Plex_Mono, Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const anton = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const bangers = Bangers({
  variable: "--font-comic",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050814",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: {
      default: "Shivansh Vyas — Full-Stack Developer",
      template: "%s — Shivansh Vyas",
    },
    description:
      "Full-stack developer building AI-powered products, automation systems, business software, and connected hardware solutions.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Shivansh Vyas — Full-Stack Developer",
      description:
        "Full-stack developer building AI-powered products, automation systems, business software, and connected hardware solutions.",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Shivansh Vyas — Full-Stack Developer",
      description:
        "Building AI-powered products, automation systems, business software, and connected hardware.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${bangers.variable} ${inter.variable} ${mono.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
