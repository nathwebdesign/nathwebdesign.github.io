import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Transport Logistique Tremblay-en-France | R DISTRIB SOLUTIONS",
  description: "Contactez R DISTRIB SOLUTIONS pour vos besoins en transport et logistique. ☎ +33 1 23 45 67 89 📍 4 Rue de Te, 93290 Tremblay-en-France. Devis gratuit.",
  keywords: "contact transport, transporteur Tremblay-en-France, logistique 93290, contact logistique, devis transport gratuit",
  openGraph: {
    title: "Contactez R DISTRIB SOLUTIONS | Transport & Logistique",
    description: "Besoin d'un transporteur fiable ? Contactez-nous pour un devis gratuit et personnalisé",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}