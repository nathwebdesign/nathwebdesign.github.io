import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Devis Transport en Ligne - Calcul Tarif Instantané | R DISTRIB SOLUTIONS",
  description: "Obtenez votre devis transport en ligne instantanément. Calculez le prix de votre livraison entre toutes les villes de France. Tarifs transparents, sans engagement.",
  keywords: "devis transport, calculateur tarif transport, cotation logistique, prix transport marchandises, devis livraison France, tarif transport routier",
  openGraph: {
    title: "Devis Transport Gratuit en Ligne | R DISTRIB SOLUTIONS",
    description: "Calculez instantanément le coût de votre transport. Devis gratuit et sans engagement.",
  },
}

export default function CotationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}