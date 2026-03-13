"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can we customize our corporate fishing trip?",
    answer:
      "We offer customizable options to align with your corporate branding and event goals. From food and drink preferences to specific fishing locations, our team is ready to adapt to your requirements. We can also arrange for custom signage, branded materials, and specific itineraries tailored to your team's objectives.",
  },
  {
    question: "What size groups can you accommodate?",
    answer:
      "Our charters can accommodate various group sizes, from small teams of 10 to larger corporate gatherings of 120+ people. The Celtic Quest IV holds up to 120 guests, while the Celtic Grace accommodates up to 129 guests. For larger events, we can coordinate multiple vessels. Contact us to discuss the best options for your business outing.",
  },
  {
    question: "What safety measures are in place on your charters?",
    answer:
      "Safety is our top priority at Celtic Quest. Our boats are equipped with the latest safety gear including life jackets for all passengers, emergency communication equipment, and first aid supplies. Our crew is fully trained in emergency procedures and Coast Guard certified, ensuring a safe and secure experience for all guests.",
  },
  {
    question: "What should we bring on our corporate charter?",
    answer:
      "Just your team and your choice of food and drinks! We provide all fishing equipment, bait, tackle, and expert instruction. We recommend comfortable shoes with non-marking soles, sunscreen, sunglasses, and any personal medications. Our vessels have climate-controlled cabins, but a light jacket is recommended for the deck.",
  },
  {
    question: "Can we do a scenic cruise instead of fishing?",
    answer:
      "Absolutely! We offer scenic cruise options focused on relaxing and building interpersonal relationships—perfect for client entertainment or team celebration. You can enjoy the beautiful Long Island Sound views, have a floating meeting, or simply let your team unwind without any fishing at all.",
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "We understand plans can change. For corporate charters, we require 72 hours notice for cancellations or rescheduling to receive a full refund. Weather-related cancellations are always fully refundable or can be rescheduled at no additional cost. We monitor conditions closely and will contact you if weather becomes a concern.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-navy/10 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg sm:text-xl font-semibold text-navy pr-8 group-hover:text-gold transition-colors">
          {faq.question}
        </span>
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
          {isOpen ? (
            <Minus className="w-5 h-5 text-gold" />
          ) : (
            <Plus className="w-5 h-5 text-navy" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-navy/70 leading-relaxed pr-16">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-gold uppercase tracking-widest text-sm font-medium mb-4 block">
              Questions & Answers
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
              Common Questions About Corporate Charters
            </h2>
            <p className="text-navy/60 max-w-xl mx-auto">
              Everything you need to know about planning your corporate fishing
              adventure.
            </p>
          </motion.div>

          {/* FAQ List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </motion.div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-10"
          >
            <p className="text-navy/60 mb-4">
              Still have questions? We&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-navy font-semibold hover:text-gold transition-colors cursor-pointer"
              >
                Send us a message
                <svg
                  className="w-4 h-4"
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
              <span className="text-navy/30 hidden sm:inline">|</span>
              <a
                href="tel:+16319283926"
                className="inline-flex items-center justify-center gap-2 text-navy font-semibold hover:text-gold transition-colors cursor-pointer"
              >
                Call (631) 928-3926
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
