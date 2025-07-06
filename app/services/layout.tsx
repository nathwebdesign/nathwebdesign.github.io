import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services Transport et Logistique | R DISTRIB SOLUTIONS",
  description: "Découvrez nos services : transport national, logistique urbaine, stockage, distribution. Solutions sur mesure pour optimiser votre supply chain. Devis gratuit.",
  keywords: "services transport, logistique professionnelle, transport national France, livraison express, stockage marchandises, distribution urbaine, transport sécurisé",
  openGraph: {
    title: "Nos Services Logistiques | R DISTRIB SOLUTIONS",
    description: "Transport national, stockage, distribution : solutions complètes pour votre chaîne logistique",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}