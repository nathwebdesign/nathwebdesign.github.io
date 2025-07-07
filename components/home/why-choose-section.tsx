"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Users, Zap } from "lucide-react"

export default function WhyChooseSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none bg-white/80 backdrop-blur-sm"
        >
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Pourquoi choisir R DISTRIB SOLUTIONS ?
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Votre satisfaction est notre priorité. Nous sommes là pour répondre à toutes 
              vos questions et vous aider à trouver la solution la plus adaptée. Une personne 
              toujours à portée de clic, prête à vous conseiller !
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                Nos engagements
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              <motion.li 
                className="flex gap-x-3"
                whileHover={{ x: 5 }}
              >
                <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
                Sélection rigoureuse de nos partenaires
              </motion.li>
              <motion.li 
                className="flex gap-x-3"
                whileHover={{ x: 5 }}
              >
                <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                Réactivité garantie
              </motion.li>
              <motion.li 
                className="flex gap-x-3"
                whileHover={{ x: 5 }}
              >
                <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                Service personnalisé
              </motion.li>
              <motion.li 
                className="flex gap-x-3"
                whileHover={{ x: 5 }}
              >
                <Zap className="h-5 w-5 text-primary" aria-hidden="true" />
                Solutions optimisées
              </motion.li>
            </ul>
            <motion.div 
              className="mt-10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="/cotation"
                className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Demander une cotation
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}