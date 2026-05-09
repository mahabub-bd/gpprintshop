"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

const contactItems = [
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "+27 69 780 6240",
    link: "tel:+27697806240",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
    label: "WhatsApp",
    value: "+27 61 859 5087",
    link: "https://wa.me/27618595087",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "gpmini2024@gmail.com",
    link: "mailto:gpmini2024@gmail.com",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
    label: "Messenger",
    value: "Message us",
    link: "https://m.me/gpprintshop",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-white/1">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">Get In Touch</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">Have questions? Reach out and we'll get back to you within minutes</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="flex items-center gap-4 bg-white/2 border border-white/10 p-5 rounded-xl hover:bg-white/4 hover:border-cyan-500/30 transition-all group"
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                >
                  {item.icon}
                </motion.div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}
          </div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/2 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">Visit Our Shop</h3>
            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm mb-1">Address</p>
                  <p className="text-white">
                    69 Victoria Road<br />Grassy Park<br />Cape Town, South Africa
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm mb-1">Hours</p>
                  <p className="text-white">
                    Mon-Fri: 8:00 - 18:00<br />
                    Sat: 9:00 - 15:00<br />
                    Sun: Closed
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.a
              href="https://wa.me/27618595087"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full flex items-center justify-center gap-2 bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-bold py-4 rounded-xl hover:from-emerald-400 hover:to-emerald-500 transition-all"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 40px -10px rgba(16, 185, 129, 0.5)" }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              Message on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
