import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import ValueProps from "@/components/ValueProps";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import FleetShowcase from "@/components/FleetShowcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* Hero Section - Above the fold with compelling headline */}
      <Hero />

      {/* Social Proof - Instant credibility with stats */}
      <SocialProofBar />

      {/* Value Propositions - Why choose Celtic Quest */}
      <ValueProps />

      {/* Experience Timeline - Walk through the day */}
      <ExperienceTimeline />

      {/* Fleet Showcase - Show the vessels */}
      <FleetShowcase />

      {/* Testimonials - Real customer stories */}
      <Testimonials />

      {/* FAQ - Overcome objections */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Contact Form - Convert to leads */}
      <ContactForm />

      {/* Footer - Trust and navigation */}
      <Footer />

      {/* Sticky CTA - Always-visible conversion opportunity */}
      <StickyCTA />
    </main>
  );
}
