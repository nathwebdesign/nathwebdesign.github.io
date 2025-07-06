import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SchemaOrg from "@/components/seo/schema-org";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R DISTRIB SOLUTIONS - Transport et Logistique en France | Devis Gratuit",
  description: "R DISTRIB SOLUTIONS : Expert en transport routier et solutions logistiques. Livraison express, stockage, distribution. Devis instantané en ligne. ✓ 98% satisfaction client",
  keywords: "transport routier, logistique France, transporteur marchandises, devis transport, livraison express, stockage logistique, distribution France, transport Tremblay-en-France, logistique 93, transporteur Île-de-France",
  authors: [{ name: "R DISTRIB SOLUTIONS" }],
  creator: "R DISTRIB SOLUTIONS",
  publisher: "R DISTRIB SOLUTIONS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rdistrib-solutions.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "R DISTRIB SOLUTIONS - Transport et Logistique Professionnels",
    description: "Solutions de transport routier et logistique sur mesure. Devis gratuit instantané. Livraison partout en France.",
    url: 'https://rdistrib-solutions.fr',
    siteName: 'R DISTRIB SOLUTIONS',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'R DISTRIB SOLUTIONS - Transport et Logistique',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R DISTRIB SOLUTIONS - Transport et Logistique',
    description: 'Expert en transport routier et solutions logistiques en France',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <SchemaOrg />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-[#285dd8]/60 via-[#285dd8]/50 to-[#285dd8]/70`}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
