import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Corporate Fishing Charters | Celtic Quest - Long Island",
  description:
    "Transform your corporate event with a private fishing charter on Long Island. Expert crew, luxury vessels, and unforgettable team building experiences. Book Celtic Quest today.",
  keywords:
    "corporate fishing charter, team building Long Island, business outing NYC, private charter fishing, Celtic Quest",
  openGraph: {
    title: "Corporate Fishing Charters | Celtic Quest - Long Island",
    description:
      "Transform your corporate event with a private fishing charter on Long Island. Expert crew, luxury vessels, and unforgettable team building experiences.",
    type: "website",
    locale: "en_US",
    siteName: "Celtic Quest Fishing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Fishing Charters | Celtic Quest",
    description:
      "Transform your corporate event with a private fishing charter on Long Island.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
