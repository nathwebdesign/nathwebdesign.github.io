"use client"

import { motion } from "framer-motion"
import { Truck, Package, Clock, Shield, MapPin, BarChart } from "lucide-react"

const services = [
  {
    name: "Transport AFFRÈTEMENT",
    description: "Organisation complète de vos transports avec notre réseau de partenaires sélectionnés.",
    icon: Truck,
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100"
  },
  {
    name: "Transport MESSAGERIE",
    description: "Livraison rapide de colis et palettes sur toute la France avec traçabilité complète.",
    icon: Package,
    color: "purple",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100"
  },
  {
    name: "Transport EXPRESS",
    description: "Livraisons urgentes en moins de 24h sur les principaux axes français et européens.",
    icon: Clock,
    color: "green",
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100"
  },
  {
    name: "Transport Produits DANGEREUX",
    description: "Transport sécurisé ADR avec conducteurs formés et véhicules équipés.",
    icon: Shield,
    color: "red",
    gradient: "from-red-500 to-red-600",
    bgGradient: "from-red-50 to-red-100"
  },
  {
    name: "Transport INTERNATIONAL",
    description: "Solutions de transport vers toute l'Europe avec dédouanement et suivi.",
    icon: MapPin,
    color: "cyan",
    gradient: "from-cyan-500 to-cyan-600",
    bgGradient: "from-cyan-50 to-cyan-100"
  },
  {
    name: "Transport LOT COMPLET",
    description: "Transport dédié pour vos chargements complets avec optimisation des coûts.",
    icon: BarChart,
    color: "amber",
    gradient: "from-amber-500 to-amber-600",
    bgGradient: "from-amber-50 to-amber-100"
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos <span className="text-primary">Services Transport</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Des solutions complètes pour optimiser votre chaîne d'approvisionnement 
            et garantir la satisfaction de vos clients.
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="relative group"
              >
                <motion.div 
                  className="relative flex flex-col h-full p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#285dd8]/20 hover:border-[#285dd8]/40"
                  whileHover={{ borderColor: "rgba(37, 99, 235, 0.4)" }}
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <motion.div 
                      className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(37, 99, 235, 0.2)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </motion.div>
                    </motion.div>
                    <motion.span 
                      className="text-xl inline-block"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      {service.name}
                    </motion.span>
                  </dt>
                  <dd className="mt-3 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <motion.div
                      className="mt-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <a href="/services" className="group/link inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                        <span>En savoir plus</span>
                        <motion.span 
                          className="ml-1"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          →
                        </motion.span>
                      </a>
                    </motion.div>
                  </dd>
                </motion.div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}