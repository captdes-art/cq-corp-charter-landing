"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Ship, Compass, Fish, PartyPopper } from "lucide-react";

const experiences = [
  {
    icon: Ship,
    step: "01",
    title: "Welcome Aboard",
    description:
      "Your group is greeted by our professional crew and shown around our spacious, well-appointed vessel. Safety briefing included.",
    image: "/images/fleet-both-boats.png",
    imagePosition: "object-bottom",
  },
  {
    icon: Compass,
    step: "02",
    title: "Set Sail",
    description:
      "Head into the beautiful Long Island Sound. Our captains know the best spots for both fishing and scenic cruising.",
    image: "/images/hero-rainbow.png",
    imagePosition: "object-bottom",
  },
  {
    icon: Fish,
    step: "03",
    title: "The Experience",
    description:
      "Whether your team wants to fish, relax, or both—we customize the day to your group's preferences. Expert instruction included.",
    image: "/images/fishing-catch.png",
    imagePosition: "object-bottom",
  },
  {
    icon: PartyPopper,
    step: "04",
    title: "Celebrate Together",
    description:
      "BYOB food and drinks while sharing stories of the day's catches. This is where real team bonds form.",
    image: "/images/corporate-group-2.png",
    imagePosition: "object-top",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="waves"
              x="0"
              y="0"
              width="100"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 10 Q 25 0, 50 10 T 100 10"
                fill="none"
                stroke="#D4A84B"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-widest text-sm font-medium mb-4 block">
            The Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            A Day On The Water With Your Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From the moment you arrive until the last catch is celebrated, every
            detail is handled with care.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/20 via-gold to-gold/20" />

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`lg:flex lg:items-center lg:gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:pl-12"
                  }`}
                >
                  <div
                    className={`glass p-6 sm:p-8 rounded-2xl ${
                      index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                    } max-w-xl`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0
                          ? "lg:flex-row-reverse lg:justify-start"
                          : ""
                      }`}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold/20">
                        <exp.icon className="w-6 h-6 text-gold" />
                      </div>
                      <span className="font-heading text-4xl font-bold text-gold/30">
                        {exp.step}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-3">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot - Hidden on mobile */}
                <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-gold shadow-lg shadow-gold/50" />
                </div>

                {/* Image */}
                <div className="lg:w-1/2 mt-6 lg:mt-0">
                  <div
                    className={`relative overflow-hidden rounded-2xl aspect-video ${
                      index % 2 === 0 ? "lg:ml-12" : "lg:mr-12"
                    }`}
                  >
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className={`object-cover ${exp.imagePosition} img-hover`}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-cream"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </section>
  );
}
