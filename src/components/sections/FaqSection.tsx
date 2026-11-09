import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_DATA } from '../../data/faqs';
import { getWhatsAppGeneralLink } from '../../data/businessInfo';

export const FaqSection: React.FC = () => {
  // Answers collapsed initially per prompt instructions
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-kepc-offwhite text-kepc-charcoal relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-kepc-red mb-3">
            <HelpCircle className="w-4 h-4 text-kepc-red" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-kepc-navy tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Concise answers about our consultancy scope, location, and statutory advisory.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-slate-300 shadow-soft' 
                    : 'bg-white/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-kepc-navy"
                >
                  <span className={`text-sm sm:text-base font-display font-medium transition-colors ${
                    isOpen ? 'text-kepc-navy font-semibold' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </span>

                  <span className={`p-1.5 rounded-full shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-kepc-navy text-white rotate-180' : 'bg-slate-100 text-slate-600 rotate-0'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Direct Query Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 text-center shadow-soft">
          <h3 className="text-base sm:text-lg font-display font-medium text-kepc-navy mb-1.5">
            Have a specific compliance question?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-5 max-w-md mx-auto">
            KEPC Owner Ravindra Kumar is directly reachable via WhatsApp or phone to discuss your enterprise's unique statutory queries.
          </p>
          <a
            href={getWhatsAppGeneralLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-kepc-navy hover:bg-kepc-navy-deep text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
