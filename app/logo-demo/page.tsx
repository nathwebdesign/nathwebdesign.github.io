"use client"

import { Logo, LogoWithText } from "@/components/ui/logo"
import { EnhancedLogo, LogoLoader } from "@/components/ui/logo-enhanced"
import { motion } from "framer-motion"

export default function LogoDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Logo Integration Showcase
        </motion.h1>

        {/* Basic Logo Components */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Basic Logo Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">Default Small</h3>
              <Logo size="sm" />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">Default Medium</h3>
              <Logo size="md" />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">Default Large</h3>
              <Logo size="lg" />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">Default Extra Large</h3>
              <Logo size="xl" />
            </div>
          </div>
        </section>

        {/* Logo with Background */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Logo with Background</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">Default Variant</h3>
              <Logo variant="default" size="lg" showBackground />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">Hero Variant</h3>
              <Logo variant="hero" size="lg" showBackground />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">Footer Variant</h3>
              <div className="bg-gray-900 p-8 rounded-xl">
                <Logo variant="footer" size="lg" showBackground />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Logo Variants */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Enhanced Logo Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">Minimal</h3>
              <EnhancedLogo variant="minimal" size="lg" />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">Card</h3>
              <EnhancedLogo variant="card" size="lg" />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">Premium</h3>
              <EnhancedLogo variant="premium" size="lg" />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">Floating</h3>
              <EnhancedLogo variant="floating" size="lg" />
            </div>
          </div>
        </section>

        {/* Logo with Text */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Logo with Text</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">With Company Name</h3>
              <LogoWithText size="lg" />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">With Tagline</h3>
              <LogoWithText size="lg" showTagline />
            </div>
          </div>
        </section>

        {/* Logo States */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Logo States & Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">Loading State</h3>
              <LogoLoader size="lg" />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">Hover Effects</h3>
              <div className="p-8 bg-gray-100 rounded-xl">
                <Logo size="lg" showBackground animated />
                <p className="text-sm text-gray-600 mt-4 text-center">Hover to see effects</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="font-medium text-gray-700">Static (No Animation)</h3>
              <Logo size="lg" showBackground animated={false} />
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800">Usage Examples</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="font-medium text-gray-700 mb-4">Header Example</h3>
              <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                <Logo size="md" showBackground variant="default" />
                <nav className="flex gap-6">
                  <span className="text-gray-600">Home</span>
                  <span className="text-gray-600">Services</span>
                  <span className="text-gray-600">About</span>
                  <span className="text-gray-600">Contact</span>
                </nav>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-12">
              <h3 className="font-medium text-gray-700 mb-8">Hero Section Example</h3>
              <div className="text-center">
                <Logo variant="hero" size="xl" showBackground className="mb-8" />
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to R DISTRIB SOLUTIONS</h1>
                <p className="text-gray-600">Your trusted partner in transport and logistics</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}