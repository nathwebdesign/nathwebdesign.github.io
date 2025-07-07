"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Logo } from "@/components/ui/logo"
import { motion } from "framer-motion"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "À propos", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header 
      className="fixed w-full bg-white/90 backdrop-blur-lg z-50 shadow-sm border-b border-white/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Logo 
            size="xl" 
            showBackground 
            variant="default"
            className="transform transition-all duration-300 hover:drop-shadow-lg scale-110 scale-x-125"
          />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                href={item.href}
                className="relative px-4 py-2 text-xl font-semibold leading-6 text-gray-900 transition-all duration-300 group"
              >
                <motion.span 
                  className="relative z-10"
                  whileHover={{ scale: 1.1, color: "#2563eb" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.name}
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg scale-x-0 group-hover:scale-x-100 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="hidden lg:flex lg:flex-1 lg:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/cotation">
              <AnimatedButton className="bg-primary text-white hover:bg-primary/90" style={{ backgroundColor: '#2563eb', color: 'white' }}>Obtenir une cotation</AnimatedButton>
            </Link>
          </motion.div>
        </motion.div>
      </nav>
      
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Logo 
                size="md" 
                showBackground 
                variant="default"
              />
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link href="/cotation" className="block">
                    <AnimatedButton className="w-full">Obtenir une cotation</AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  )
}