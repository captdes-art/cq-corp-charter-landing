"use client";

import { motion } from "framer-motion";
import { Anchor, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Private Charters", href: "#fleet" },
  { label: "Corporate Events", href: "#contact" },
  { label: "About Us", href: "#social-proof" },
  { label: "FAQ", href: "#faq" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/CelticQuestFishing",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/celticquestfishing",
    icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] pt-16 pb-8">
      <div className="container-main">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-teal flex items-center justify-center">
                <Anchor className="w-6 h-6 text-navy" />
              </div>
              <div>
                <span className="font-heading text-2xl font-bold text-white">
                  Celtic Quest
                </span>
                <p className="text-gray-500 text-xs">Fishing Charters</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Port Jefferson&apos;s premier fishing charter service. Creating
              unforgettable corporate experiences on Long Island Sound since
              1999.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors cursor-pointer group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" />
                </a>
              ))}
              {/* TripAdvisor */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors cursor-pointer group"
                aria-label="TripAdvisor"
              >
                <span className="text-gray-400 group-hover:text-gold transition-colors text-xs font-bold">
                  TA
                </span>
              </a>
              {/* Yelp */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors cursor-pointer group"
                aria-label="Yelp"
              >
                <span className="text-gray-400 group-hover:text-gold transition-colors text-xs font-bold">
                  Y
                </span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg font-bold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-bold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+16319283926"
                  className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-gold" />
                  (631) 928-3926
                </a>
              </li>
              <li>
                <a
                  href="mailto:Office@CQFleet.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-gold" />
                  Office@CQFleet.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  Port Jefferson Harbor
                  <br />
                  Long Island, NY
                </span>
              </li>
            </ul>
          </motion.div>

          {/* CTA Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading text-lg font-bold text-white mb-6">
              Book Your Charter
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              Ready to plan your corporate event? Get a custom quote for your
              team today.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-block px-6 py-3 rounded-lg text-center"
            >
              Request Quote
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Celtic Quest Fishing. All rights
              reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
