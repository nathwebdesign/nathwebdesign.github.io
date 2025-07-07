"use client"

import React from "react"
import { motion } from "framer-motion"
import { Shield, Clock, Users, Zap } from "lucide-react"

export default function WhyChooseSection() {
  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
      
      {/* Decorative blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-2xl rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none bg-white backdrop-blur-lg shadow-xl ring-1 ring-gray-100"
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