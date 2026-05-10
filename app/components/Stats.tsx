"use client";

import { motion, useInView } from "framer-motion";
import { Award, Heart, Sparkles, Users, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Printing", value: 99, suffix: "%", icon: Zap, gradient: "from-amber-400 to-orange-500", desc: "Same Day Delivery" },
  { label: "Happy Customers", value: 5000, suffix: "+", icon: Users, gradient: "from-emerald-400 to-teal-500", desc: "Trusted by many" },
  { label: "Years Experience", value: 15, suffix: "+", icon: Award, gradient: "from-cyan-400 to-blue-500", desc: "Industry experts" },
  { label: "Satisfaction", value: 100, suffix: "%", icon: Heart, gradient: "from-rose-400 to-pink-500", desc: "Guaranteed quality" },
];

function CountUp({ value, suffix = "", duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(value * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-24 border-y border-slate-200 dark:border-white/5 relative overflow-hidden bg-slate-50 dark:bg-transparent">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-cyan-400 font-semibold text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900 dark:text-white">
            Numbers That Speak
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity duration-500"
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`, backgroundClip: 'padding-box', '--tw-gradient-from': `var(--color-${stat.gradient.split('-')[1]}-400)`, '--tw-gradient-to': `var(--color-${stat.gradient.split('-')[3]}-500)` } as React.CSSProperties} />
              <div className="relative bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 text-center hover:bg-slate-50 dark:hover:bg-white/8 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500 overflow-hidden shadow-sm dark:shadow-none">
                {/* Animated sparkle effect */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className={`w-4 h-4 text-${stat.gradient.split('-')[1]}-400`} />
                </motion.div>

                <motion.div
                  className={`inline-flex w-16 h-16 rounded-2xl bg-linear-to-br ${stat.gradient} items-center justify-center mb-6 shadow-lg shadow-${stat.gradient.split('-')[1]}-500/20`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  className={`text-5xl lg:text-6xl font-bold bg-linear-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: i * 0.1 + 0.3, bounce: 0.5 }}
                >
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </motion.div>

                <div className="text-slate-900 dark:text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-slate-500 dark:text-slate-400 text-sm">{stat.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
