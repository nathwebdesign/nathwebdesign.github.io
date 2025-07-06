"use client"

import { motion } from "framer-motion"
import { MapPin, Plane, Ship, Truck } from "lucide-react"

const axes = [
  {
    name: "Roissy CDG",
    icon: Truck,
    description: "Hub aéroport - Import/Export",
    color: "blue",
    size: "large"
  },
  {
    name: "Lyon",
    icon: Truck,
    description: "Carrefour logistique européen",
    color: "purple",
    size: "large"
  },
  {
    name: "Marseille",
    icon: Truck,
    description: "Port méditerranéen - Fret maritime",
    color: "cyan",
    size: "small"
  },
  {
    name: "Le Havre",
    icon: Truck,
    description: "Premier port français - International",
    color: "green",
    size: "small"
  }
]

export default function AxesSection() {
  return (
    <section className="py-24 sm:py-32 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 bg-white/85 backdrop-blur-sm rounded-2xl p-8 text-center border border-[#285dd8]/20"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            France & Europe : Notre Terrain de Jeu
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Depuis ces 4 axes majeurs, nous desservons <strong>toute la France</strong> et 
            <strong> les principales destinations européennes</strong>. Notre expertise nous permet 
            d'optimiser vos flux de transport dans les deux sens, garantissant efficacité et ponctualité.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos <span className="text-primary">4 Axes Stratégiques</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Spécialistes du transport depuis et vers les principaux hubs logistiques français.
            <br />
            <strong className="text-primary">Toute la France dans les deux sens</strong> depuis ces 4 points stratégiques.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {axes.map((axe, index) => (
            <motion.div
              key={axe.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#285dd8]/20 hover:border-[#285dd8]/40">
                <motion.div
                  className={`mx-auto mb-4 flex items-center justify-center rounded-xl bg-primary/10 ${
                    axe.size === 'large' ? 'h-16 w-16' : 'h-12 w-12'
                  }`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <axe.icon className={`text-primary ${
                    axe.size === 'large' ? 'h-8 w-8' : 'h-6 w-6'
                  }`} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 text-center">
                  {axe.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 text-center">
                  {axe.description}
                </p>
                <motion.div
                  className="mt-4 flex items-center justify-center gap-1 text-primary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-medium">Point stratégique</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}