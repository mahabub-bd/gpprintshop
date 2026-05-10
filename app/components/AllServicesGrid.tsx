"use client";

import { motion } from "framer-motion";

const allServices = [
  "A4, A5, A3 Printing",
  "Color & B&W",
  "Digital Scanning",
  "Lamination",
  "ID Photos",
  "Email/Fax Service",
  "Invitation Cards",
  "Stickers & Labels",
];

export function AllServicesGrid() {
  return (
    <section className="py-20 bg-linear-to-b from-white to-slate-50 dark:from-slate-950 dark:to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">Complete Printing Solutions</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {allServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.5)" }}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-5 rounded-xl text-center hover:border-cyan-500/20 hover:bg-slate-50 dark:hover:bg-white/8 transition-all cursor-default shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none"
            >
              <span className="text-slate-700 dark:text-slate-300 font-medium">{service}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
