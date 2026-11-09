import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ShieldAlert, ArrowUp } from 'lucide-react';
import { KEPCLogo } from '../common/KEPCLogo';
import { BUSINESS_INFO, getWhatsAppGeneralLink, getWhatsAppLinkForService } from '../../data/businessInfo';
import { SERVICES_DATA } from '../../data/services';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-kepc-navy-deep text-white border-t border-slate-800 relative overflow-hidden">
      
      {/* Upper Footer: Main Navigation & Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <KEPCLogo variant="light" size="md" />

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Helping businesses navigate statutory compliance and registration processes with experienced guidance and dependable support.
            </p>

            {/* Quick Contact Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={getWhatsAppGeneralLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider transition-colors border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About KEPC</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#approach" className="hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Links (Col 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Consultancy Scope
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a 
                    href={getWhatsAppLinkForService(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <span className="text-[10px] text-slate-500 group-hover:text-amber-400">Enquire</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Direct Details (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Neemrana Office
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-kepc-red shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {BUSINESS_INFO.address.shop}, {BUSINESS_INFO.address.complex}, Near Hanuman Market, Neemrana (Alwar), Rajasthan 301705
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white">
                  +91 90019 00715
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                Mon – Sat: 9:30 AM – 7:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Mandatory Statutory Independence Statement (Section 10 Requirement) */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3.5 text-xs text-slate-400">
          <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-300">Mandatory Statutory Clarification:</span>
            <p className="mt-0.5 text-slate-400">
              "{BUSINESS_INFO.disclaimer}"
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright, Legal Links, Scroll to Top */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Krishna ESIC PF Consultancy (KEPC). All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">•</span>
            <button 
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
