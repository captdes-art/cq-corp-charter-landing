"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, X } from "lucide-react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 100vh)
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      if (scrollY > heroHeight && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile - Bottom bar */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          >
            <div className="bg-navy/95 backdrop-blur-lg border-t border-white/10 p-4 safe-area-inset-bottom">
              <div className="flex gap-3">
                <a
                  href="#contact"
                  className="flex-1 btn-primary py-3 rounded-lg text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Now
                </a>
                <a
                  href="tel:+16319283926"
                  className="flex-1 btn-secondary py-3 rounded-lg text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call
                </a>
              </div>
            </div>
          </motion.div>

          {/* Desktop - Floating card */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-8 right-8 z-50 hidden lg:block"
          >
            <div className="glass-dark rounded-2xl p-6 shadow-2xl max-w-xs relative">
              {/* Dismiss button */}
              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 p-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-4">
                <p className="text-white font-semibold mb-1">
                  Ready to get started?
                </p>
                <p className="text-gray-400 text-sm">
                  Book your corporate charter today
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="#contact"
                  className="btn-primary w-full py-3 rounded-lg text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Request Quote
                </a>
                <a
                  href="tel:+16319283926"
                  className="btn-secondary w-full py-3 rounded-lg text-center flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (631) 928-3926
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
