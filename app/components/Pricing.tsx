"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  { name: "B&W Printing", price: "From R2", features: ["A4 prints", "Fast turnaround", "Bulk discounts available"] },
  { name: "Color Printing", price: "From R5", features: ["Vibrant colors", "Premium paper", "Various sizes"] },
  { name: "Business Cards", price: "From R150", features: ["100 cards per pack", "Full color", "Design included"] },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">Simple, Transparent Pricing</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, borderColor: "rgba(6, 182, 212, 0.5)" }}
              className="bg-white/2 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <motion.div
                className="text-4xl font-bold text-cyan-400 mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: i * 0.1 + 0.3, bounce: 0.5 }}
              >
                {plan.price}
              </motion.div>
              <ul className="space-y-3">
                {plan.features.map((f, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + j * 0.1 + 0.2 }}
                    className="flex items-center gap-3 text-slate-400 text-sm"
                  >
                    <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                    {f}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
