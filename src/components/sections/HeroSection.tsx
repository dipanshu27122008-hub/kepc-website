import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Award, MapPin } from 'lucide-react';
import { getWhatsAppGeneralLink } from '../../data/businessInfo';

export const HeroSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] lg:min-h-screen flex items-end pb-16 lg:pb-24 pt-32 overflow-hidden bg-kepc-navy-deep"
    >
      {/* Background Photography with subtle scale animation and deep navy overlay */}
      <motion.div 
        initial={{ scale: 1.06, opacity: 0.85 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=85" 
          alt="Modern business office and consultation environment"
          className="w-full h-full object-cover object-center filter brightness-[0.68] contrast-[1.08]"
          loading="eager"
        />
        {/* Editorial Multi-Stop Gradient Overlay for optimum contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-kepc-navy-deep via-kepc-navy-deep/85 to-kepc-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-kepc-navy-deep/90 via-kepc-navy/60 to-transparent" />
      </motion.div>

      {/* Subtle Brand Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-kepc-red via-amber-500 to-kepc-navy z-20" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Highlight Badge: 20 Years of Experience & Neemrana Location */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="tracking-wide">20 Years of Experience</span>
            <span className="w-1.5 h-1.5 rounded-full bg-kepc-red" />
            <span className="text-slate-300 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-kepc-red" />
              Neemrana, Rajasthan
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-amber-400 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3">
            Professional ESIC, EPF & Registration Consultancy
          </motion.p>

          {/* Main Headline (Clean, oversized, editorial inspired by Wix C. Reyes reference) */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium text-white tracking-tight leading-[1.08] mb-6 drop-shadow-sm">
            Business Compliance, <br className="hidden sm:inline" />
            <span className="italic font-normal text-slate-100">Made Simpler.</span>
          </motion.h1>

          {/* Supporting Description — Shortened to 2 lines on desktop */}
          <motion.p variants={itemVariants} className="text-slate-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-10">
            Navigating statutory compliance and business registrations across Neemrana with direct owner guidance and dependable local support.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary Action */}
            <a
              href={getWhatsAppGeneralLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-kepc-red hover:bg-kepc-red-hover text-white text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kepc-red"
            >
              <MessageSquare className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>Talk to the Owner</span>
            </a>

            {/* Secondary Action */}
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-semibold tracking-wide backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <span>Explore Services</span>
              <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
