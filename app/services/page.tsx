"use client"

import { motion } from "framer-motion"
import { Truck, Package, Clock, Shield, MapPin, Users, Zap, Anchor } from "lucide-react"

const mainServices = [
  {
    name: "Affrètement",
    description: "Solutions complètes pour vos besoins de transport. Nous trouvons les transporteurs adaptés à vos marchandises et vos contraintes.",
    features: [
      "Transport de palettes et marchandises",
      "Camion complet ou groupage",
      "Véhicules spécialisés (plateau, grue, hayon)",
      "Transport exceptionnel et convois",
      "Solutions nationales et internationales"
    ],
    icon: Truck,
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Messagerie",
    description: "Service de livraison rapide et flexible pour vos colis et documents. Idéal pour les envois réguliers et les petits volumes.",
    features: [
      "Livraison de colis et documents",
      "Service régulier et planifié",
      "Suivi en temps réel",
      "Tarifs dégressifs selon volume",
      "Réseau national de distribution"
    ],
    icon: Package,
    color: "from-green-500 to-green-600"
  },
  {
    name: "Express",
    description: "Pour vos urgences, notre équipe réactive trouve la solution transport adaptée dans les plus brefs délais.",
    features: [
      "Livraison urgente et prioritaire",
      "Réactivité maximale",
      "Solutions immédiates",
      "Transport dédié si nécessaire",
      "Service premium garanti"
    ],
    icon: Clock,
    color: "from-orange-500 to-orange-600"
  }
]

export default function ServicesPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Solutions Transport
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Une petite équipe d'experts dédiée à vous fournir un service sur-mesure. 
            Grâce à nos partenaires de confiance, nous assurons une exécution fluide 
            et efficace de toutes vos expéditions.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="relative rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden group"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center mb-6">
                    <motion.div 
                      className={`flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br ${service.color} mb-4`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-center">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 + featureIndex * 0.05 }}
                      >
                        <motion.svg
                          className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 + featureIndex * 0.05 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </motion.svg>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}