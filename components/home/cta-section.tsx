"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <motion.div 
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/90 via-accent/80 to-primary/90 rounded-3xl"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />
      
      <motion.div 
        className="relative mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.7,
          type: "spring",
          stiffness: 100
        }}
        viewport={{ once: true }}
      >
        
        <motion.h2 
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Prêt à optimiser votre logistique ?
        </motion.h2>
        <motion.p 
          className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Obtenez une cotation personnalisée en quelques clics et découvrez comment 
          R DISTRIB SOLUTIONS peut transformer votre chaîne d'approvisionnement.
        </motion.p>
        <motion.div 
          className="mt-10 flex items-center justify-center gap-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/cotation">
              <Button size="lg" variant="secondary">
                Obtenir une cotation
              </Button>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/contact" className="inline-flex items-center text-sm font-semibold leading-6 text-white hover:text-white/80 transition-colors">
              Nous contacter 
              <motion.span 
                className="ml-1"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}