"use client";

import { motion } from "framer-motion";
import { Star, Users, Award, Calendar } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "25,000+",
    label: "Happy Guests Annually",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Google Rating",
  },
  {
    icon: Award,
    value: "246",
    label: "Five-Star Reviews",
  },
  {
    icon: Calendar,
    value: "25+",
    label: "Years of Excellence",
  },
];

export default function SocialProofBar() {
  return (
    <section
      id="social-proof"
      className="bg-cream py-12 sm:py-16 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E293B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-main relative z-10">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-navy/60 text-sm uppercase tracking-widest mb-8"
        >
          Trusted by leading Long Island businesses
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy/5 mb-4">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-navy/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-navy/10"
        >
          {/* Google Reviews Badge */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-gold fill-gold"
                />
              ))}
            </div>
            <span className="text-sm text-navy/70">Google Reviews</span>
          </div>

          {/* TripAdvisor Badge */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#00AA6C] flex items-center justify-center">
              <span className="text-white text-xs font-bold">TA</span>
            </div>
            <span className="text-sm text-navy/70">TripAdvisor Rated</span>
          </div>

          {/* Yelp Badge */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#D32323] flex items-center justify-center">
              <span className="text-white text-xs font-bold">Y</span>
            </div>
            <span className="text-sm text-navy/70">Yelp Recommended</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
