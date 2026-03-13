"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  Ruler,
  Thermometer,
  Sofa,
  Waves,
  CheckCircle2,
} from "lucide-react";

const vessels = [
  {
    name: "Celtic Quest IV",
    tagline: "Premium Fishing Vessel",
    description:
      "Our flagship vessel offers the perfect blend of comfort and fishing capability for corporate groups seeking an authentic charter experience.",
    image: "/images/hero-rainbow.png",
    specs: [
      { icon: Ruler, label: "Length", value: "70 ft" },
      { icon: Users, label: "Capacity", value: "100 Guests" },
      { icon: Thermometer, label: "Cabin", value: "Climate-Controlled" },
      { icon: Sofa, label: "Amenities", value: "Full Service" },
    ],
    features: [
      "Spacious deck area for team activities",
      "Modern fish-finding electronics",
      "Clean restroom facilities",
      "Covered seating areas",
    ],
  },
  {
    name: "Celtic Grace",
    tagline: "The Fishing Yacht",
    description:
      "Our newest addition brings yacht-level luxury to the fishing charter experience. Perfect for impressing clients or hosting executive retreats.",
    image: "/images/celtic-grace.jpg",
    specs: [
      { icon: Ruler, label: "Length", value: "80 ft" },
      { icon: Users, label: "Capacity", value: "110 Guests" },
      { icon: Waves, label: "Style", value: "Luxury Yacht" },
      { icon: Sofa, label: "Interior", value: "Premium Cabin" },
    ],
    features: [
      "Elegant interior lounge",
      "Premium audio system",
      "Large open deck space",
      "VIP treatment standard",
    ],
  },
];

export default function FleetShowcase() {
  return (
    <section id="fleet" className="section-padding bg-cream">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-widest text-sm font-medium mb-4 block">
            Our Fleet
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Built for Corporate Excellence
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto text-lg">
            Two exceptional vessels designed to accommodate groups of any size
            with comfort and style.
          </p>
        </motion.div>

        {/* Vessels Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {vessels.map((vessel, index) => (
            <motion.div
              key={vessel.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image
                  src={vessel.image}
                  alt={vessel.name}
                  fill
                  className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

                {/* Vessel Name Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-gold text-sm font-medium uppercase tracking-wider">
                    {vessel.tagline}
                  </span>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-1">
                    {vessel.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Description */}
                <p className="text-navy/70 mb-6">{vessel.description}</p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 p-4 bg-cream rounded-xl">
                  {vessel.specs.map((spec) => (
                    <div key={spec.label} className="text-center">
                      <spec.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                      <div className="text-xs text-navy/50 uppercase tracking-wide">
                        {spec.label}
                      </div>
                      <div className="text-sm font-semibold text-navy">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {vessel.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-navy/70"
                    >
                      <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="btn-primary text-lg px-8 py-4 rounded-lg inline-flex items-center gap-2"
          >
            Request a Private Tour
          </a>
          <p className="text-navy/50 text-sm mt-4">
            Not sure which vessel is right? We&apos;ll help you choose.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
