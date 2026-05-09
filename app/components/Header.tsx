"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Printing Solutions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-xl bg-black/50 border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="GP Print Shop Logo"
            width={100}
            height={40}
            className="object-contain"
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-white text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+27697806240"
            className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
          >
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-white/10"
          >
            <motion.nav
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="container mx-auto px-6 py-4 flex flex-col gap-2"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-300 hover:text-white hover:bg-white/5 text-base transition-colors py-3 px-4 rounded-lg"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+27697806240"
                className="flex items-center gap-2 bg-cyan-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-cyan-400 transition-all justify-center mt-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
