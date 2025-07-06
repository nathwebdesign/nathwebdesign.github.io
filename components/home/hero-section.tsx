"use client"

import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Logo } from "@/components/ui/logo"
import { EnhancedLogo } from "@/components/ui/logo-enhanced"
import Link from "next/link"
import { ArrowRight, Package, Truck, Users, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary opacity-10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary opacity-5 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:max-w-lg"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="mb-8 flex items-center gap-3"
              >
                <div>
                  <h1 className="text-4xl font-black text-primary tracking-tight">
                    R DISTRIB
                  </h1>
                  <p className="text-lg font-bold text-primary tracking-[0.2em] uppercase mt-1">
                    SOLUTIONS
                  </p>
                </div>
                <div>
                  <svg 
                    className="w-12 h-12 text-primary"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary"
              >
                <Sparkles className="h-4 w-4" />
                <span>Spécialistes Transport France & Europe</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Fatigué de chercher le
                </motion.span>
                <motion.span 
                  className="text-primary block sm:inline"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {" bon transporteur ?"}
                </motion.span>
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Simplifiez vos expéditions de palettes avec R DISTRIB SOLUTIONS. 
                Une équipe réactive, des délais tenus, zéro perte de temps. 
                Faites rouler vos marchandises sans friction !
              </motion.p>
              <motion.div 
                className="mt-10 flex items-center gap-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Link href="/cotation">
                  <AnimatedButton 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 hover:shadow-lg transition-all duration-300 group"
                  >
                    <motion.span
                      className="flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Obtenir une cotation
                      <motion.span
                        className="ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </motion.span>
                  </AnimatedButton>
                </Link>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link href="/services" className="group text-sm font-semibold leading-6 text-primary hover:text-accent transition-colors">
                    <span className="relative">
                      Découvrir nos services
                      <motion.span 
                        className="ml-1 inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-200 pt-10 lg:mt-16 lg:pt-16"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="relative rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 p-4 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-primary p-2">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <motion.div 
                    className="text-2xl font-bold text-gray-900"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    100+
                  </motion.div>
                </div>
                <div className="text-sm text-gray-600 mt-2">Clients actifs</div>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="relative rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 p-4 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-primary p-2">
                    <Truck className="h-4 w-4 text-white" />
                  </div>
                  <motion.div 
                    className="text-2xl font-bold text-gray-900"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                  >
                    250+
                  </motion.div>
                </div>
                <div className="text-sm text-gray-600 mt-2">Partenaires transport</div>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="relative rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 p-4 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-primary p-2">
                    <Package className="h-4 w-4 text-white" />
                  </div>
                  <motion.div 
                    className="text-2xl font-bold text-gray-900"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, type: "spring" }}
                  >
                    15+
                  </motion.div>
                </div>
                <div className="text-sm text-gray-600 mt-2">Ans d'expérience</div>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative lg:ml-8"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="absolute -inset-4 bg-primary opacity-20 blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
                alt="Camion de livraison R DISTRIB SOLUTIONS"
                className="relative w-full rounded-2xl shadow-2xl ring-1 ring-white/50 ring-offset-4 ring-offset-blue-50"
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-primary/30 blur-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}