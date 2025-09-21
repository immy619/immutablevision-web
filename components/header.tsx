"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 mobile-safe-area ${
        isScrolled ? "glass-effect border-b border-border/40" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-transparent">
                <Image
                  src="/immutable-vision-logo.png"
                  alt="Immutable Vision Logo"
                  fill
                  className="object-contain drop-shadow-sm"
                  priority
                />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold gradient-text">Immutable Vision</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8 lg:space-x-12">
              <a
                href="#funds"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Funds
              </a>
              <a
                href="#features"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                About
              </a>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-primary/10 transition-colors duration-200"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium">
              <a href="https://docs.immutablevision.com/" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-primary/10 transition-colors duration-200 h-10 w-10"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-primary/10 transition-colors duration-200 h-10 w-10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-4 pb-6 space-y-2 border-t border-border/20 glass-effect rounded-b-lg mt-2">
              <a
                href="#funds"
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Funds
              </a>
              <a
                href="#features"
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <div className="px-4 pt-4">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium">
                  <a href="https://docs.immutablevision.com/" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
