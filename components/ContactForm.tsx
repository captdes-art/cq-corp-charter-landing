"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Loader2,
  Send,
} from "lucide-react";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  groupSize: string;
  preferredDate: string;
  eventType: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setIsSubmitted(true);
      reset();
    } catch {
      setSubmitError("Something went wrong. Please call us at (631) 928-3926.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-navy to-[#0F172A] relative"
    >
      {/* Background elements - Teal and gold accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-teal/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-teal/10 rounded-full blur-3xl" />
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
            Get Started
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Plan Your Corporate Adventure?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Get a custom quote for your team in 24 hours. We&apos;ll help you create
            an unforgettable experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <div className="glass rounded-3xl p-8 sm:p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-400 mb-6">
                  Your request has been received. Our team will contact you
                  within 24 hours to discuss your corporate charter.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-gold hover:text-white transition-colors cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="glass rounded-3xl p-8 sm:p-10"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      {...register("company")}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="Acme Corporation"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone", { required: "Phone is required" })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Group Size */}
                  <div>
                    <label
                      htmlFor="groupSize"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Estimated Group Size
                    </label>
                    <select
                      id="groupSize"
                      {...register("groupSize")}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-gold focus:ring-1 focus:ring-gold transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-navy">
                        Select group size
                      </option>
                      <option value="10-25" className="bg-navy">
                        10-25 guests
                      </option>
                      <option value="25-50" className="bg-navy">
                        25-50 guests
                      </option>
                      <option value="50-100" className="bg-navy">
                        50-100 guests
                      </option>
                      <option value="100+" className="bg-navy">
                        100+ guests
                      </option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Preferred Date Range
                    </label>
                    <input
                      type="text"
                      id="preferredDate"
                      {...register("preferredDate")}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="e.g., June 15-30, 2024"
                    />
                  </div>

                  {/* Event Type */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="eventType"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      {...register("eventType")}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-gold focus:ring-1 focus:ring-gold transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-navy">
                        Select event type
                      </option>
                      <option value="team-building" className="bg-navy">
                        Team Building Event
                      </option>
                      <option value="client-entertainment" className="bg-navy">
                        Client Entertainment
                      </option>
                      <option value="company-party" className="bg-navy">
                        Company Party/Celebration
                      </option>
                      <option value="executive-retreat" className="bg-navy">
                        Executive Retreat
                      </option>
                      <option value="other" className="bg-navy">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                      placeholder="Tell us about your event goals, any special requests, or questions..."
                    />
                  </div>
                </div>

                {submitError && (
                  <p className="mt-4 text-red-400 text-center">{submitError}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-8 btn-primary text-lg py-4 rounded-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Request Your Quote
                    </>
                  )}
                </button>

                <p className="text-center text-gray-500 text-sm mt-4">
                  We typically respond within 24 hours
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-3xl p-8 h-full">
              <h3 className="font-heading text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:+16319283926"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Call Us</div>
                    <div className="text-white font-semibold text-lg group-hover:text-gold transition-colors">
                      (631) 928-3926
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:Office@CQFleet.com"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email Us</div>
                    <div className="text-white font-semibold group-hover:text-gold transition-colors">
                      Office@CQFleet.com
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Location</div>
                    <div className="text-white font-semibold">
                      Port Jefferson, Long Island
                    </div>
                    <div className="text-gray-400 text-sm">New York</div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">
                      Response Time
                    </div>
                    <div className="text-white font-semibold">
                      Within 24 Hours
                    </div>
                    <div className="text-gray-400 text-sm">
                      Usually much faster
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-8" />

              {/* Quick CTA */}
              <div className="text-center">
                <p className="text-gray-400 mb-4">Prefer to talk now?</p>
                <a
                  href="tel:+16319283926"
                  className="btn-secondary w-full py-3 rounded-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
