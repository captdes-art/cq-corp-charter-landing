"use client";

import { motion } from "framer-motion";
import { Anchor, Handshake, Users } from "lucide-react";

const features = [
  {
    icon: Anchor,
    title: "Hassle-Free Experience",
    description:
      "We handle everything—premium equipment, expert crew, and complete setup. Your team just shows up ready to enjoy the day on the water.",
  },
  {
    icon: Handshake,
    title: "Builds Real Connections",
    description:
      "Break down corporate barriers in a fun, relaxed environment. Watch colleagues become teammates as they work together to land the big catch.",
  },
  {
    icon: Users,
    title: "Accommodates Large Groups",
    description:
      "Our fleet handles groups from 10 to 120+ guests. Perfect for departments, entire companies, or client entertainment events.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ValueProps() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Why Business Leaders Choose Celtic Quest
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto text-lg">
            The ultimate solution for memorable corporate events that build
            lasting relationships and boost team morale.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-navy/5 card-hover">
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-navy to-ocean mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-gold" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-navy/60 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-teal to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-navy/60 mb-4">
            Ready to see what makes us different?
          </p>
          <a
            href="#fleet"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors cursor-pointer"
          >
            Explore Our Fleet
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
