"use client"

import * as React from "react"
import { Button } from "./button"
import { Menu, X, Phone, User } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

interface NavbarProps {
  onLoginClick?: () => void
  onStartClick?: () => void
  className?: string
}

export function Navbar({ onLoginClick, onStartClick, className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-ci-concrete py-3" : "bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-ci-strong rounded-lg flex items-center justify-center text-white font-bold text-xl">
            B
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-ci-ink">
            BuildFlow<span className="text-ci-safety">AI</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-semibold text-ci-slate hover:text-ci-strong transition-colors">Process</a>
          <a href="#" className="text-sm font-semibold text-ci-slate hover:text-ci-strong transition-colors">Projects</a>
          <a href="#" className="text-sm font-semibold text-ci-slate hover:text-ci-strong transition-colors">Pricing</a>
          <div className="h-4 w-[1px] bg-ci-concrete" />
          <div className="flex items-center gap-4">
            <a href="tel:+1800BUILD" className="flex items-center gap-2 text-sm font-semibold text-ci-strong">
              <Phone className="w-4 h-4" />
              1-800-BUILD
            </a>
            <Button variant="ghost" size="sm" onClick={onLoginClick}>
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button variant="primary" size="sm" onClick={onStartClick}>
              Start Intake
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-ci-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-ci-concrete p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#" className="text-lg font-semibold text-ci-ink">Process</a>
            <a href="#" className="text-lg font-semibold text-ci-ink">Projects</a>
            <a href="#" className="text-lg font-semibold text-ci-ink">Pricing</a>
            <hr className="border-ci-concrete" />
            <Button variant="outline" className="w-full" onClick={onLoginClick}>Login</Button>
            <Button variant="primary" className="w-full" onClick={onStartClick}>Start Project Intake</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
