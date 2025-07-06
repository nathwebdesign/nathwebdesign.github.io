"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface EnhancedLogoProps {
  variant?: "minimal" | "card" | "premium" | "floating"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export function EnhancedLogo({ 
  variant = "minimal", 
  size = "md", 
  className 
}: EnhancedLogoProps) {
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-20 w-20",
    xl: "h-24 w-24"
  }

  const variants = {
    minimal: (
      <motion.div
        className={cn("relative group", className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img 
          src="/logo-rdistrib.png" 
          alt="R DISTRIB SOLUTIONS"
          className={cn("relative z-10 w-auto", sizeClasses[size])}
        />
      </motion.div>
    ),
    
    card: (
      <motion.div
        className={cn("relative group", className)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-2xl"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />
        
        {/* Card container */}
        <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
          {/* Top accent */}
          <div className="absolute top-0 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          
          {/* Logo */}
          <motion.img 
            src="/logo-rdistrib.png" 
            alt="R DISTRIB SOLUTIONS"
            className={cn("relative z-10 w-auto mx-auto", sizeClasses[size])}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          
          {/* Bottom reflection */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
      </motion.div>
    ),
    
    premium: (
      <motion.div
        className={cn("relative group", className)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glass container */}
        <div className="relative glass-white rounded-3xl p-5 shadow-2xl group-hover:shadow-primary/25 transition-all duration-300">
          {/* Inner gradient border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 -z-10" />
          
          {/* Shine effect */}
          <div className="absolute inset-0 rounded-3xl shine opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Logo with shadow */}
          <motion.img 
            src="/logo-rdistrib.png" 
            alt="R DISTRIB SOLUTIONS"
            className={cn("relative z-10 w-auto logo-shadow-lg", sizeClasses[size])}
            whileHover={{ 
              scale: 1.1,
              filter: "drop-shadow(0 20px 25px rgba(37, 99, 235, 0.3))"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          
          {/* Decorative dots */}
          <motion.div
            className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-accent rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>
      </motion.div>
    ),
    
    floating: (
      <motion.div
        className={cn("relative", className)}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Shadow that scales with floating */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-gray-900/20 rounded-full blur-xl"
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating container */}
        <motion.div
          className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 shadow-xl hover-lift"
          whileHover={{ scale: 1.05 }}
        >
          {/* Animated border gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-20 animate-gradient" />
          
          {/* Logo */}
          <img 
            src="/logo-rdistrib.png" 
            alt="R DISTRIB SOLUTIONS"
            className={cn("relative z-10 w-auto", sizeClasses[size])}
          />
          
          {/* Pulse rings */}
          <motion.div
            className="absolute inset-0 rounded-2xl border border-primary/20"
            animate={{
              scale: [1, 1.2, 1.2],
              opacity: [0.5, 0, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.div>
      </motion.div>
    )
  }

  const content = variants[variant]

  if (variant === "minimal") {
    return (
      <Link href="/" className="block">
        {content}
      </Link>
    )
  }

  return content
}

// Logo with loading animation
export function LogoLoader({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-20 w-20"
  }

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={cn(
          "rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20",
          sizeClasses[size]
        )}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.img 
        src="/logo-rdistrib.png" 
        alt="R DISTRIB SOLUTIONS"
        className={cn("absolute inset-0 w-full h-full object-contain", sizeClasses[size])}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      />
    </motion.div>
  )
}