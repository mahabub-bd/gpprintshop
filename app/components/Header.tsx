"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

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
    <header className="sticky top-0 z-50 overflow-hidden">
      {/* Main Header */}
      <div className="backdrop-blur-xl bg-white/80 dark:bg-black/50 border-b border-slate-200 dark:border-white/10">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative w-auto h-12">
              <Image
                src="/logo_light.png"
                alt="GP Print Shop Logo"
                width={160}
                height={60}
                className="object-contain dark:hidden h-full w-auto"
              />
              <Image
                src="/logo.png"
                alt="GP Print Shop Logo"
                width={160}
                height={60}
                className="object-contain hidden dark:block h-full w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="tel:+27697806240"
                className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-white/8 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-900 dark:text-white p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
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
            className="lg:hidden border-t border-slate-200 dark:border-white/10 bg-white/80 dark:bg-black/50 backdrop-blur-xl"
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
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 text-base transition-colors py-3 px-4 rounded-lg"
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
