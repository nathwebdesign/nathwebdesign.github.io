"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const Map = dynamic(() => import("@/components/cotation/map"), { ssr: false })

const poles = {
  'Roissy CDG': [49.0097, 2.5479],
  'Lyon': [45.7640, 4.8357],
  'Marseille': [43.2965, 5.3698],
  'Le Havre': [49.4944, 0.1079]
}

const poleDetails = [
  {
    name: "Roissy CDG",
    description: "Hub aéroport - Import/Export",
    features: ["Proximité aéroport", "Flux internationaux", "Zone IDF"]
  },
  {
    name: "Lyon",
    description: "Carrefour logistique européen",
    features: ["Centre névralgique", "Axe Nord-Sud", "Proche Suisse/Italie"]
  },
  {
    name: "Marseille",
    description: "Port méditerranéen - Fret maritime",
    features: ["Accès maritime", "Sud de la France", "Porte Méditerranée"]
  },
  {
    name: "Le Havre",
    description: "Premier port français",
    features: ["Import/Export", "Normandie", "Liens UK/Europe"]
  }
]

export default function AxesSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">4 Pôles Stratégiques</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Une couverture nationale depuis nos bases logistiques
          </p>
        </motion.div>

        {/* Bannière d'information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Couverture Nationale & Européenne
          </h3>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Depuis ces 4 axes majeurs, nous desservons <strong className="text-white">toute la France</strong> et 
            les <strong className="text-white">principales destinations européennes</strong>. 
            Notre expertise nous permet d'optimiser vos flux de transport dans les deux sens.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Carte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="h-[500px]">
                <Map 
                  depart=""
                  arrivee=""
                  poles={poles}
                />
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800 text-center font-medium">
                🚚 Livraison dans toute la France depuis ces 4 hubs
              </p>
            </div>
          </motion.div>

          {/* Liste des pôles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {poleDetails.map((pole, index) => (
              <motion.div
                key={pole.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {pole.name}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {pole.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pole.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}