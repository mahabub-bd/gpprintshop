"use client";

import { motion } from "framer-motion";
import { FileText, IdCard, Image as ImageIcon, Layers, Mail, Palette, PenTool, Printer, Scan, Scissors, Sparkles } from "lucide-react";

const solutions = [
  { title: "Business Printing", desc: "Professional business cards, letterheads, envelopes & more", icon: <FileText className="w-8 h-8" /> },
  { title: "A4, A5, A3 Printing", desc: "All standard paper sizes available for your documents", icon: <Printer className="w-8 h-8" /> },
  { title: "Colour Printing", desc: "Vibrant full-colour prints for marketing and presentations", icon: <Palette className="w-8 h-8" /> },
  { title: "Black & White Printing", desc: "Cost-effective B&W printing for documents and forms", icon: <Printer className="w-8 h-8" /> },
  { title: "Digital Scanning", desc: "High-quality scanning and digitization services", icon: <Scan className="w-8 h-8" /> },
  { title: "Logo Design", desc: "Custom logo design and branding services", icon: <PenTool className="w-8 h-8" /> },
  { title: "Lamination Service", desc: "Protect your documents with professional lamination", icon: <Layers className="w-8 h-8" /> },
  { title: "Email & Fax Service", desc: "Send documents via email or fax", icon: <Mail className="w-8 h-8" /> },
  { title: "ID Photos", desc: "Professional ID photos for all purposes", icon: <IdCard className="w-8 h-8" /> },
  { title: "Passport Size Photos", desc: "Standard passport and ID photos", icon: <ImageIcon className="w-8 h-8" /> },
  { title: "Marketing Materials", desc: "Flyers, brochures, banners & posters", icon: <Sparkles className="w-8 h-8" /> },
  { title: "Photo Services", desc: "Photo enlargements & custom framing", icon: <Scissors className="w-8 h-8" /> },
];

export function PrintingSolutions() {
  return (
    <section id="solutions" className="py-32 bg-slate-100 dark:bg-linear-to-b dark:from-black dark:via-slate-950 dark:to-black scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
          <h2 className="text-4xl lg:text-6xl font-bold mt-4 text-slate-900 dark:text-white">Complete Printing Solutions</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto text-lg">From concept to final product, we provide comprehensive printing services tailored to your needs</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 hover:bg-slate-50 dark:hover:bg-white/8 hover:border-cyan-500/30 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <motion.div
                className="w-14 h-14 bg-linear-to-br from-cyan-400/20 to-cyan-600/20 rounded-xl flex items-center justify-center text-cyan-400 mb-5"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0], transition: { duration: 0.4 } }}
              >
                {solution.icon}
              </motion.div>
              <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{solution.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{solution.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-400 to-cyan-600 text-white dark:text-black font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Quote
            <Printer className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
