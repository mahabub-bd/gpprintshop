"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Photo Printing", desc: "High-quality prints in all sizes", icon: "📷" },
  { title: "Photo Frames", desc: "Custom frames for your memories", icon: "🖼️" },
  { title: "Wedding Cards", desc: "Elegant invitations for your big day", icon: "💒" },
  { title: "Business Cards", desc: "Professional cards that impress", icon: "💼" },
  { title: "Flyers & Brochures", desc: "Marketing materials that stand out", icon: "📄" },
  { title: "Logo Design", desc: "Custom branding for your business", icon: "✏️" },
];

export function Services() {
  return (
    <section id="services" className="py-32 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Services</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">What We Offer</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white/2 border border-white/10 rounded-2xl p-8 hover:bg-white/4 hover:border-cyan-500/30 transition-all"
            >
              <motion.div
                className="text-5xl mb-5"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-slate-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
