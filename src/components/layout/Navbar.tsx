import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, MessageSquare } from 'lucide-react';
import { KEPCLogo } from '../common/KEPCLogo';
import { BUSINESS_INFO, getWhatsAppGeneralLink } from '../../data/businessInfo';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-kepc-navy border-b border-slate-100' 
          : 'bg-kepc-navy-deep/80 backdrop-blur-sm py-4 text-white border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-kepc-red focus:ring-offset-2 rounded"
          >
            <KEPCLogo variant={isScrolled ? 'color' : 'light'} size="sm" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm font-semibold tracking-wide transition-colors py-1 ${
                    isScrolled
                      ? isActive 
                        ? 'text-kepc-red font-bold' 
                        : 'text-slate-700 hover:text-kepc-navy'
                      : isActive 
                        ? 'text-white font-bold' 
                        : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Subtle underline on active or hover */}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-kepc-red transform origin-left transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                    }`} 
                  />
                </a>
              );
            })}
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppGeneralLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm ${
                isScrolled
                  ? 'bg-kepc-navy text-white hover:bg-kepc-navy-deep hover:shadow-md'
                  : 'bg-white text-kepc-navy hover:bg-slate-100 hover:shadow-md'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-kepc-red" />
              <span>Talk to the Owner</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className={`p-2.5 rounded-full transition-colors ${
                isScrolled 
                  ? 'bg-slate-100 text-kepc-navy hover:bg-slate-200' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              title={`Call ${BUSINESS_INFO.contactPerson} at ${BUSINESS_INFO.phoneFormatted}`}
              aria-label="Direct Phone Call"
            >
              <PhoneCall className="w-4 h-4 text-emerald-500" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className={`p-2 rounded-full ${
                isScrolled ? 'bg-slate-100 text-kepc-navy' : 'bg-white/10 text-white'
              }`}
              aria-label="Call Now"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-slate-800 border-b border-slate-200 px-6 py-6 shadow-xl space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-slate-100 text-kepc-red font-bold' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={getWhatsAppGeneralLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-kepc-navy text-white text-sm font-bold uppercase rounded-lg shadow-sm hover:bg-kepc-navy-deep transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-kepc-red" />
              <span>Talk to the Owner</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>Call: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
