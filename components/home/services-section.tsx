"use client"

import { motion } from "framer-motion"
import { Truck, Package, Clock } from "lucide-react"

const services = [
  {
    name: "Affrètement",
    description: "Organisation complète de vos transports avec notre réseau de partenaires sélectionnés.",
    icon: Truck,
    features: ["Camions complets", "Groupage", "France entière"],
    color: "blue"
  },
  {
    name: "Messagerie",
    description: "Livraison rapide de colis et palettes sur toute la France avec traçabilité complète.",
    icon: Package,
    features: ["Colis & palettes", "Traçabilité", "J+1 à J+3"],
    color: "green"
  },
  {
    name: "Express",
    description: "Livraisons urgentes en moins de 24h sur les principaux axes français.",
    icon: Clock,
    features: ["Urgences", "24h chrono", "Suivi temps réel"],
    color: "orange"
  }
]

export default function ServicesSection() {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "bg-blue-100 text-blue-600",
        hover: "hover:bg-blue-100 hover:border-blue-300",
        gradient: "from-blue-500 to-blue-600"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "bg-green-100 text-green-600",
        hover: "hover:bg-green-100 hover:border-green-300",
        gradient: "from-green-500 to-green-600"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        icon: "bg-orange-100 text-orange-600",
        hover: "hover:bg-orange-100 hover:border-orange-300",
        gradient: "from-orange-500 to-orange-600"
      }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Services de <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">Transport</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Solutions adaptées à tous vos besoins logistiques
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color)
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1
                  }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className={`relative h-full rounded-2xl ${colors.bg} ${colors.border} border-2 p-8 transition-all duration-300 ${colors.hover} overflow-hidden`}>
                    {/* Decorative gradient */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.gradient} opacity-5 rounded-full blur-3xl`} />
                    
                    {/* Icon */}
                    <div className={`inline-flex rounded-xl ${colors.icon} p-3 mb-4`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <a 
                      href="/services" 
                      className="inline-flex items-center text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors"
                    >
                      <span>Découvrir</span>
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}