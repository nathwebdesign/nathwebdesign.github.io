"use client"

import { motion } from "framer-motion"
import { Button, ButtonProps } from "./button"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
}

export function AnimatedButton({ children, className, ...props }: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="relative"
    >
      <motion.div
        className="absolute inset-0 bg-primary/30 blur-xl rounded-md"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <Button 
        className={`${className} relative hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300`} 
        {...props}
      >
        <motion.span
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {children}
        </motion.span>
      </Button>
    </motion.div>
  )
}