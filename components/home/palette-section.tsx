"use client"

import { motion } from "framer-motion"
import { Truck, Users, Clock, Shield, Globe, Phone, Package, ArrowRight } from "lucide-react"

const advantages = [
  {
    icon: Truck,
    title: "Solutions de transport sur mesure",
    description: "Camion traditionnel, plateau, grue, chariot embarqué, conventionnel ou exceptionnel",
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50"
  },
  {
    icon: Users,
    title: "Une équipe réactive",
    description: "Experts dédiés à vous fournir un service personnalisé pour toutes vos expéditions",
    color: "purple",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    icon: Clock,
    title: "Délais tenus, camions adaptés",
    description: "Exécution fluide et efficace grâce à nos partenaires de confiance",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50"
  },
  {
    icon: Shield,
    title: "Partenaires fiables",
    description: "Réseau de transporteurs sélectionnés pour leur professionnalisme",
    color: "amber",
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50"
  },
  {
    icon: Globe,
    title: "France et international",
    description: "Avec ou sans rupture de charge, nous couvrons toutes vos destinations",
    color: "cyan",
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-50"
  },
  {
    icon: Phone,
    title: "Un seul point de contact",
    description: "Zéro perte de temps, une personne dédiée à portée de clic",
    color: "rose",
    gradient: "from-rose-500 to-red-600",
    bgGradient: "from-rose-50 to-red-50"
  }
]

export default function PaletteSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Lorsque vous avez des <span className="text-primary">palettes à expédier</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Il est temps de changer de tempo. Moins de stress. Plus d'efficacité.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                <motion.div 
                  className="relative flex flex-col h-full p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
                  whileHover={{ borderColor: "rgba(37, 99, 235, 0.3)" }}
                >
                  <dt className="flex items-start gap-4">
                    <motion.div 
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 360,
                        backgroundColor: "rgba(37, 99, 235, 0.2)"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <advantage.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </motion.div>
                    <motion.span 
                      className="text-lg font-semibold leading-7 text-gray-900"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      {advantage.title}
                    </motion.span>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <motion.p 
                      className="flex-auto"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                    >
                      {advantage.description}
                    </motion.p>
                  </dd>
                </motion.div>
              </motion.div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.7,
            type: "spring",
            stiffness: 80
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="relative mt-16 bg-primary rounded-2xl transform transition-transform"
        >
          <div className="p-8 lg:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-bold text-white">
                Objectif : faire rouler vos marchandises sans friction
              </h3>
              <p className="mt-4 text-lg text-white/90">
                Chez R DISTRIB SOLUTIONS, on a tout ça ! Et si vous avez déjà votre partenaire 
                organisateur de transport, pourquoi ne pas en avoir deux ? Gagnez encore plus 
                de temps et doublez l'efficacité d'organisation de vos expéditions !
              </p>
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  href="/cotation"
                  className="group rounded-md bg-white px-6 py-3 text-base font-semibold text-primary hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Interrogez-nous pour vos prochaines expéditions !
                </motion.a>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center text-base font-semibold leading-6 text-white hover:text-white/80 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Un appel suffit 
                  <motion.span 
                    className="ml-1"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}