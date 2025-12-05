"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#home", label: "Beranda" },
    { href: "#menu", label: "Menu" },
    { href: "#kontak", label: "Kontak" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">BC</span>
            </div>
            <span className="font-bold text-lg text-primary">Bu Cempluk</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/6288983647665"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium hover:bg-secondary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/6288983647665"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium mt-4 w-fit"
            >
              <Phone className="w-4 h-4" />
              Pesan Sekarang
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
