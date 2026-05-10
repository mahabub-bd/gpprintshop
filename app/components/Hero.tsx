"use client";

import { motion, Variants } from "framer-motion";
import { MessageCircle } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

const child: Variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
};

export function Hero() {
  const headingWords = ["Premium", "Printing", "Made", "Simple"];

  return (
    <section className="relative py-32 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-slate-600 dark:text-slate-300 text-sm">Open Now • Cape Town</span>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {headingWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  transition={{ type: "spring", damping: 12, stiffness: 100 }}
                  className={index < 2
                    ? "bg-linear-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent"
                    : "bg-linear-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent"
                  }
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.h2>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Professional printing services for all your needs. Business cards, wedding invitations,
            photo prints & more — delivered fast.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a
              href="https://wa.me/27618595087"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-cyan-500 to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-400 hover:to-cyan-500 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px -10px rgba(6, 182, 212, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Get Started
            </motion.a>
            <motion.a
              href="tel:+27697806240"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-semibold py-4 px-8 rounded-xl hover:bg-slate-100 dark:hover:bg-white/8 transition-all"
              whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
