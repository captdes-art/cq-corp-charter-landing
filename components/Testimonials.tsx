"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Regina Ferguson",
    role: "Customer",
    location: "New Jersey",
    content:
      "OMG. I came from NJ to fish on this boat. A 2 hour drive!!! Guess what I will never go on any other boat but this one. My husband never caught this much fish. We will be driving 2 hours for now on. We found our place.",
    rating: 5,
  },
  {
    name: "Amal Sokkar",
    role: "Regular Customer",
    location: "Long Island",
    content:
      "I always fish on the Celtic Quest fishing boat, and I highly recommend it to everyone. I am very happy with the crew and Captain Mark, who is truly awesome.",
    rating: 5,
  },
  {
    name: "Jolie Powell",
    role: "Family Outing",
    location: "Long Island",
    content:
      "We had the most delightful day today fishing on the Celtic Quest along with my 9 year old grandson. Captain Desi and his crew were professional, fun, and made it all so easy for us. What an amazing first experience, truly unforgettable!",
    rating: 5,
  },
  {
    name: "Maria Campisi",
    role: "Family Reunion",
    location: "Long Island",
    content:
      "Our Annual Family fishing trip was a huge success yesterday! We caught lots of Porgies, the day was beautiful and the staff was wonderful!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding bg-gradient-to-b from-navy to-ocean relative overflow-hidden">
      {/* Background Elements - Teal and gold glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-gold uppercase tracking-widest text-sm font-medium mb-4 block">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it—hear from the thousands who&apos;ve
            experienced Celtic Quest.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl p-8 sm:p-12"
              >
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-gold/30 mb-6" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-gold fill-gold"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed mb-8">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-teal flex items-center justify-center text-navy font-bold text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonials[currentIndex].role} •{" "}
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full glass hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                      index === currentIndex
                        ? "bg-gold w-8"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Review Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-white/10"
        >
          {/* Google */}
          <a
            href="https://www.google.com/search?q=celtic+quest+fishing+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>
            <span className="text-sm">246 Google Reviews</span>
          </a>

          {/* TripAdvisor */}
          <a
            href="#"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-[#00AA6C] flex items-center justify-center">
              <span className="text-white text-xs font-bold">TA</span>
            </div>
            <span className="text-sm">TripAdvisor Excellence</span>
          </a>

          {/* Yelp */}
          <a
            href="#"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-[#D32323] flex items-center justify-center">
              <span className="text-white text-xs font-bold">Y</span>
            </div>
            <span className="text-sm">Yelp 5-Star Rated</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
