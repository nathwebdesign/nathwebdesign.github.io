import { Metadata } from "next"

export const metadata: Metadata = {
  title: "À Propos - Transporteur Logistique de Confiance | R DISTRIB SOLUTIONS",
  description: "Découvrez R DISTRIB SOLUTIONS : votre partenaire logistique expert en transport routier. 500+ clients satisfaits, 98% de satisfaction, flotte moderne.",
  keywords: "entreprise transport, logistique Tremblay-en-France, transporteur 93, société transport routier, expert logistique France",
  openGraph: {
    title: "À Propos de R DISTRIB SOLUTIONS | Expert Transport",
    description: "Votre partenaire de confiance pour des solutions logistiques innovantes et personnalisées",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}