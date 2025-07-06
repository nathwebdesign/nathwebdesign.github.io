"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-sm text-white border-t border-gray-800">
      
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              R DISTRIB SOLUTIONS
            </motion.h3>
            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Votre partenaire logistique de confiance pour des solutions de transport sur mesure.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors inline-block">Accueil</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors inline-block">Services</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors inline-block">À propos</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors inline-block">Contact</Link>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <motion.li className="text-gray-400 cursor-pointer hover:text-white transition-colors" whileHover={{ x: 5 }}>Transport national</motion.li>
              <motion.li className="text-gray-400 cursor-pointer hover:text-white transition-colors" whileHover={{ x: 5 }}>Logistique urbaine</motion.li>
              <motion.li className="text-gray-400 cursor-pointer hover:text-white transition-colors" whileHover={{ x: 5 }}>Stockage</motion.li>
              <motion.li className="text-gray-400 cursor-pointer hover:text-white transition-colors" whileHover={{ x: 5 }}>Distribution</motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                  <MapPin className="h-4 w-4 text-primary" />
                </motion.div>
                <span>93290 Tremblay-en-France</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Phone className="h-4 w-4 text-primary" />
                </motion.div>
                <span>01 48 16 35 14</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Mail className="h-4 w-4 text-primary" />
                </motion.div>
                <span>commandes@rdistrib-solutions.fr</span>
              </motion.li>
              <motion.li 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Clock className="h-4 w-4 text-primary" />
                </motion.div>
                <span>8h30-12h30 / 14h-18h</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-center text-gray-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            © {new Date().getFullYear()} R DISTRIB SOLUTIONS. Tous droits réservés.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}