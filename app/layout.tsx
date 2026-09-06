import type { Metadata, Viewport } from "next";
import "./globals.css";
import { MyceliumBackground } from "./components/MyceliumBackground";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";
import { AIChatWidget } from "./components/AIChatWidget";

export const metadata: Metadata = {
  title: "Organic Mushrooms Farm - Premium Farming Ecosystem India",
  description:
    "Buy mushroom spawn, get professional mushroom training, complete farm setup, and source fresh & dry mushrooms in bulk or retail across India. Serving all major cities and states with expert consultation and high-yield spawn.",
  metadataBase: new URL("https://organicmushroomsfarm.com"),
  keywords: [
    "mushroom farming India",
    "mushroom training India",
    "mushroom spawn supplier",
    "turnkey mushroom farm setup",
    "button mushroom farming",
    "oyster mushroom spawn"
  ],
  authors: [{ name: "Organic Mushrooms Farm" }],
  openGraph: {
    title: "Organic Mushrooms Farm - Premium Farming Ecosystem India",
    description:
      "Buy mushroom spawn, get professional mushroom training, complete farm setup, and source fresh & dry mushrooms across India.",
    url: "https://organicmushroomsfarm.com",
    siteName: "Organic Mushrooms Farm",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7C3AED",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen relative selection:bg-purple-500 selection:text-white flex flex-col">
        <MyceliumBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 w-full pt-16 sm:pt-20">{children}</main>
          <Footer />
          <FloatingButtons />
          <AIChatWidget />
        </div>
      </body>
    </html>
  );
}
