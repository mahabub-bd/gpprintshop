"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", text: "Fast service and excellent quality! Got my wedding invitations done in just 2 days.", stars: 5 },
  { name: "John P.", text: "Best prices in Cape Town. Been using them for years for all my business printing.", stars: 5 },
  { name: "Aisha K.", text: "Very professional and helpful. They helped me design the perfect logo.", stars: 5 },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900 dark:text-white">What Our Customers Say</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 hover:bg-slate-50 dark:hover:bg-white/8 hover:border-cyan-500/30 transition-all shadow-sm dark:shadow-none"
            >
              <motion.div
                className="flex gap-1 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
              >
                {Array.from({ length: review.stars }).map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 + j * 0.1 + 0.4, type: "spring" }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </motion.div>
              <p className="text-slate-700 dark:text-slate-300 mb-6">&ldquo;{review.text}&rdquo;</p>
              <p className="text-slate-900 dark:text-white font-semibold">— {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
