"use client"

import { motion } from "framer-motion"
import { Truck, Shield, Clock, MapPin } from "lucide-react"

export default function FleetSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-gray-50">
      {/* Subtle background accent */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-primary opacity-5 blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Notre <span className="text-primary">Flotte Moderne</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Des véhicules récents et entretenus pour garantir la sécurité et la ponctualité de vos livraisons
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.7,
              type: "spring",
              stiffness: 80
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070"
              alt="Camion R DISTRIB SOLUTIONS moderne"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-8 text-white"
              initial={{ y: 20, opacity: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Transport Longue Distance
              </motion.h3>
              <motion.p 
                className="text-gray-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Flotte de camions 40 tonnes pour vos livraisons volumineuses partout en France
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.7,
              type: "spring",
              stiffness: 80,
              delay: 0.1
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2076"
              alt="Camionnette de livraison urbaine"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-8 text-white"
              initial={{ y: 20, opacity: 0.8 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Livraison Urbaine
              </motion.h3>
              <motion.p 
                className="text-gray-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Véhicules adaptés pour la distribution en centre-ville et zones difficiles d'accès
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              scale: 1.05,
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={{ scale: 0.95 }}
            className="group text-center p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <motion.div 
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white"
              whileHover={{ 
                rotate: 360,
                scale: 1.1
              }}
              transition={{ duration: 0.6 }}
            >
              <Truck className="h-6 w-6" />
            </motion.div>
            <h4 className="text-lg font-semibold text-gray-900">Flotte récente</h4>
            <p className="mt-2 text-sm text-gray-600">Véhicules de moins de 3 ans</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              scale: 1.05,
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={{ scale: 0.95 }}
            className="group text-center p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <motion.div 
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white"
              whileHover={{ 
                rotate: 360,
                scale: 1.1
              }}
              transition={{ duration: 0.6 }}
            >
              <Shield className="h-6 w-6" />
            </motion.div>
            <h4 className="text-lg font-semibold text-gray-900">Sécurité maximale</h4>
            <p className="mt-2 text-sm text-gray-600">GPS et systèmes anti-vol</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              scale: 1.05,
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={{ scale: 0.95 }}
            className="group text-center p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <motion.div 
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white"
              whileHover={{ 
                rotate: 360,
                scale: 1.1
              }}
              transition={{ duration: 0.6 }}
            >
              <Clock className="h-6 w-6" />
            </motion.div>
            <h4 className="text-lg font-semibold text-gray-900">Maintenance régulière</h4>
            <p className="mt-2 text-sm text-gray-600">Contrôles techniques stricts</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              scale: 1.05,
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={{ scale: 0.95 }}
            className="group text-center p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <motion.div 
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white"
              whileHover={{ 
                rotate: 360,
                scale: 1.1
              }}
              transition={{ duration: 0.6 }}
            >
              <MapPin className="h-6 w-6" />
            </motion.div>
            <h4 className="text-lg font-semibold text-gray-900">Suivi temps réel</h4>
            <p className="mt-2 text-sm text-gray-600">Localisation GPS 24/7</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}