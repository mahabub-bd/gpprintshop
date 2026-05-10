"use client";

import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Contact Us", desc: "Send us a message or call to get started", icon: "📞", gradient: "from-cyan-400 to-cyan-600" },
  { step: "02", title: "Discuss", desc: "Tell us what you need and we'll guide you", icon: "💬", gradient: "from-violet-400 to-violet-600" },
  { step: "03", title: "We Print", desc: "Quality prints with fast turnaround time", icon: "🖨️", gradient: "from-amber-400 to-amber-600" },
  { step: "04", title: "Collect", desc: "Pick up in-store or get it delivered", icon: "📦", gradient: "from-emerald-400 to-emerald-600" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-slate-100 dark:bg-white/1 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Process</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900 dark:text-white">How It Works</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl mx-auto">Get your prints ready in 4 simple steps</p>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connecting Line (Desktop) */}
              {i < 3 && (
                <motion.div
                  className="hidden md:block absolute top-16 left-[60%] w-[80%] border-t-2 border-dashed border-slate-300 dark:border-white/10 -z-10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              )}
              {/* Step Card */}
              <div className="group text-center">
                {/* Step Number Badge */}
                <motion.div
                  className="relative inline-flex mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${item.gradient} blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                  <motion.div
                    className={`relative w-16 h-16 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className={`absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-linear-to-br ${item.gradient} flex items-center justify-center text-white text-xs font-bold border-4 border-white dark:border-background-alt-dark`}>
                    {i + 1}
                  </div>
                </motion.div>
                {/* Content */}
                <motion.div
                  className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 group-hover:bg-slate-50 dark:group-hover:bg-white/8 group-hover:border-slate-300 dark:group-hover:border-white/20 transition-all duration-300 shadow-sm dark:shadow-none"
                  whileHover={{ y: -8 }}
                >
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
