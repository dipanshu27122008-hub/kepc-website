import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { ApproachSection } from './components/sections/ApproachSection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { LegalModal } from './components/common/LegalModals';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppGeneralLink } from './data/businessInfo';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'why-us', 'approach', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-kepc-charcoal flex flex-col relative selection:bg-kepc-navy selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ApproachSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Legal Modals (Privacy Policy / Terms) */}
      <LegalModal 
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating Quick WhatsApp Action Button with Subtle Entrance & Refined Hover */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end"
      >
        <motion.a
          href={getWhatsAppGeneralLink()}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-elevated transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          title="Chat directly with KEPC Owner Ravindra Kumar on WhatsApp"
          aria-label="Direct WhatsApp Consultation with Owner"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline text-xs font-bold tracking-wider uppercase">
            WhatsApp Owner
          </span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default App;
