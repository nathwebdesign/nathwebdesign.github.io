"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Truck, Globe, Award } from "lucide-react"

const values = [
  {
    name: "Fiabilité",
    description: "Nous respectons nos engagements et sélectionnons rigoureusement nos partenaires transporteurs.",
    icon: CheckCircle,
  },
  {
    name: "Innovation",
    description: "Solutions adaptées pour optimiser chaque étape de votre chaîne logistique.",
    icon: Globe,
  },
  {
    name: "Flexibilité",
    description: "Solutions sur mesure adaptées aux besoins spécifiques de chaque client.",
    icon: Users,
  },
  {
    name: "Durabilité",
    description: "Engagement fort pour réduire notre empreinte carbone et promouvoir une logistique verte.",
    icon: Award,
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 pt-28 sm:py-32 sm:pt-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              À propos de <span className="text-primary">R DISTRIB SOLUTIONS</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              R DISTRIB SOLUTIONS est votre partenaire de confiance pour des solutions logistiques 
              innovantes et personnalisées. Notre expertise nous permet de répondre aux défis 
              complexes de la chaîne d'approvisionnement moderne.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Notre Histoire */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Notre Histoire</h2>
            <p className="mt-4 text-gray-600">
              Créée en mars 2024, R DISTRIB SOLUTIONS est née de l'expertise d'affréteurs 
              cumulant plus de 15 ans d'expérience dans le transport et la logistique.
            </p>
            <p className="mt-4 text-gray-600">
              Fort de cette expérience et d'un réseau de 250 partenaires de confiance en France 
              et en Europe, nous offrons des solutions de transport sur mesure, adaptées aux 
              besoins spécifiques de chaque client.
            </p>
            <p className="mt-4 text-gray-600">
              Notre connaissance approfondie du secteur nous permet d'anticiper vos besoins et 
              de vous proposer les solutions les plus efficaces et compétitives du marché.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070"
              alt="Équipe collaborative R DISTRIB SOLUTIONS"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Nos Valeurs */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos Valeurs
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Les principes qui guident notre action au quotidien
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                    {value.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Accompagnement Personnalisé */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Accompagnement Personnalisé
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Un service sur mesure avec un interlocuteur unique dédié
            </p>
          </div>
          
          <div className="mx-auto mt-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Un seul interlocuteur pour toutes vos expéditions</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Chez R DISTRIB SOLUTIONS, nous croyons en l'importance d'une relation personnalisée. 
                C'est pourquoi nous vous attribuons un interlocuteur unique qui connaît parfaitement 
                vos besoins et vos contraintes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Vos avantages :</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Conseil personnalisé adapté à votre secteur</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Suivi détaillé de toutes vos expéditions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Reporting régulier et analyse de performance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Optimisation continue de vos flux logistiques</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Notre engagement :</h4>
                  <p className="text-sm text-gray-600">
                    Votre conseiller dédié est disponible pour répondre à toutes vos questions, 
                    gérer vos urgences et vous proposer des solutions d'optimisation. Cette approche 
                    personnalisée nous permet de construire une relation de confiance durable et 
                    d'améliorer continuellement la qualité de nos services.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Chiffres clés */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            R DISTRIB SOLUTIONS en chiffres
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Des résultats qui témoignent de notre engagement
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-y-4 border-l-4 border-primary pl-6"
          >
            <div className="text-4xl font-bold text-primary">100+</div>
            <div className="text-base leading-7 text-gray-600">
              <p className="font-semibold text-gray-900">Clients actifs</p>
              <p>qui nous font confiance au quotidien</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-y-4 border-l-4 border-primary pl-6"
          >
            <div className="text-4xl font-bold text-primary">98%</div>
            <div className="text-base leading-7 text-gray-600">
              <p className="font-semibold text-gray-900">Taux de satisfaction</p>
              <p>mesuré sur l'ensemble de nos services</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-y-4 border-l-4 border-primary pl-6"
          >
            <div className="text-4xl font-bold text-primary">15+</div>
            <div className="text-base leading-7 text-gray-600">
              <p className="font-semibold text-gray-900">Années d'expérience</p>
              <p>dans le transport et la logistique</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-y-4 border-l-4 border-primary pl-6"
          >
            <div className="text-4xl font-bold text-primary">250+</div>
            <div className="text-base leading-7 text-gray-600">
              <p className="font-semibold text-gray-900">Partenaires transport</p>
              <p>en France et en Europe</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="px-6 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à travailler ensemble ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              Découvrez comment R DISTRIB SOLUTIONS peut transformer votre logistique
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Nous contacter
              </a>
              <a
                href="/services"
                className="text-base font-semibold leading-7 text-white hover:text-gray-100"
              >
                Découvrir nos services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}