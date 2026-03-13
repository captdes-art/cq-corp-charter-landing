"use client";

import { motion } from "framer-motion";
import { ChevronDown, Phone, Star, Clock, Users } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-group-catch.png"
          alt="Happy group showing off their striped bass catch on Celtic Quest charter"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient Overlay - Slate Grey with teal accents (reduced for image visibility) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/90 via-[#1E293B]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E293B]/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0D9488]/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-main w-full pt-20 pb-32">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-[#1E293B]/60 backdrop-blur-sm rounded-3xl px-6 sm:px-10 py-10 sm:py-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block px-4 py-2 glass-dark rounded-full text-sm font-medium text-gold tracking-wide uppercase">
              Private Corporate Charters
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Transform Your Next Corporate Event Into An{" "}
            <span className="text-gradient-gold">Unforgettable Experience</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-light"
          >
            Private fishing charters on Long Island for team building, client
            entertainment, and business outings that your team will talk about
            for years.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10"
          >
            <div className="flex items-center gap-2 text-white">
              <Star className="w-5 h-5 text-gold fill-gold" />
              <span className="text-sm sm:text-base">
                <strong>4.9</strong> Stars on Google
              </span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-5 h-5 text-gold" />
              <span className="text-sm sm:text-base">
                <strong>25+</strong> Years Experience
              </span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Users className="w-5 h-5 text-gold" />
              <span className="text-sm sm:text-base">
                <strong>120+</strong> Guest Capacity
              </span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="btn-primary text-lg px-8 py-4 rounded-lg inline-flex items-center gap-2 font-semibold"
            >
              Plan Your Corporate Outing
              <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
            </a>
            <a
              href="tel:+16319283926"
              className="btn-secondary text-lg px-8 py-4 rounded-lg inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (631) 928-3926
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
        >
          <a
            href="#social-proof"
            aria-label="Scroll to learn more"
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Discover More</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-cream"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
