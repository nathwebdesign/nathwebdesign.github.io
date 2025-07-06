"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "default" | "hero" | "footer"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  showBackground?: boolean
  animated?: boolean
}

export function Logo({ 
  variant = "default", 
  size = "md", 
  className,
  showBackground = false,
  animated = true 
}: LogoProps) {
  const sizeClasses = {
    sm: "h-12",
    md: "h-20",
    lg: "h-28",
    xl: "h-32"
  }

  const containerClasses = {
    default: "relative group",
    hero: "relative group",
    footer: "relative"
  }

  const backgroundStyles = {
    default: "bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm shadow-lg border border-gray-100",
    hero: "bg-gradient-to-br from-white to-blue-50/30 shadow-xl border border-primary/10",
    footer: "bg-gray-900/10 backdrop-blur-sm border border-gray-800/20"
  }

  const LogoImage = () => (
    <img 
      src="/logo-rdistrib.png" 
      alt="R DISTRIB SOLUTIONS"
      className={cn(
        "relative z-10 w-auto transition-all duration-300",
        sizeClasses[size],
        animated && "group-hover:scale-105"
      )}
    />
  )

  const content = (
    <div className={cn(containerClasses[variant], className)}>
      {showBackground && (
        <>
          {/* Animated gradient background */}
          <motion.div
            className={cn(
              "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300",
              "bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20",
              "blur-xl",
              animated && "group-hover:opacity-100"
            )}
            animate={animated ? {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            } : undefined}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          />
          
          {/* Main background container */}
          <div className={cn(
            "absolute inset-0 rounded-2xl transition-all duration-300",
            backgroundStyles[variant],
            animated && "group-hover:shadow-2xl group-hover:scale-105"
          )} />
          
          {/* Inner glow effect */}
          <div className={cn(
            "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300",
            "bg-gradient-to-br from-primary/10 to-transparent",
            animated && "group-hover:opacity-100"
          )} />
        </>
      )}
      
      {/* Logo container with padding */}
      <div className={cn(
        "relative flex items-center justify-center transition-transform duration-300",
        showBackground && "p-4"
      )}>
        {animated ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogoImage />
          </motion.div>
        ) : (
          <LogoImage />
        )}
      </div>

      {/* Decorative elements for hero variant */}
      {variant === "hero" && showBackground && (
        <>
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </>
      )}

      {/* Subtle reflection effect */}
      {showBackground && (
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-50" />
      )}
    </div>
  )

  // If it's in a link context, wrap with Link
  if (variant !== "hero") {
    return (
      <Link href="/" className="block">
        {content}
      </Link>
    )
  }

  return content
}

// Additional styled logo variants for specific use cases
export function LogoWithText({ 
  size = "md", 
  className,
  showTagline = false 
}: { 
  size?: "sm" | "md" | "lg"
  className?: string
  showTagline?: boolean 
}) {
  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Logo size={size} showBackground animated />
      <div className="flex flex-col">
        <motion.h2 
          className={cn(
            "font-bold text-gray-900",
            textSizes[size]
          )}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          R DISTRIB SOLUTIONS
        </motion.h2>
        {showTagline && (
          <motion.p 
            className="text-sm text-gray-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transport & Logistique
          </motion.p>
        )}
      </div>
    </div>
  )
}