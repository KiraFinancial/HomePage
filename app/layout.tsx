import type { Metadata } from "next";
import { LenisProvider } from "./components/LenisProvider";
import "lenis/dist/lenis.css";
import "./globals.css";
import TopBanner from "./components/topBanner";
import Navbar from "./components/Navbar";

import { Roboto } from "next/font/google";
import Footer from "./components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Kira Financial Broker LLC",
  description: "Trusted Forex Broker UAE | - Kira Financial Online CFD Trading",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <LenisProvider>
          <TopBanner />
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
