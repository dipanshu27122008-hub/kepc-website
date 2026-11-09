import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, UserCheck, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-kepc-offwhite text-kepc-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Balanced Two-Column Image & Text Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clean Professional Portrait & Simplified Owner Card */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Clean Professional Owner Portrait (Zero text / overlays inside image) */}
            <div className="relative rounded-2xl overflow-hidden shadow-editorial bg-slate-100 aspect-[4/5] sm:aspect-square group border border-slate-200">
              <img 
                src="/images/owner-portrait.jpg" 
                alt="Ravindra Kumar — Owner, Krishna ESIC PF Consultancy (KEPC)"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                loading="lazy"
              />
            </div>

            {/* Simplified Owner Profile Details Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-200 shadow-sm shrink-0">
                <img 
                  src="/images/owner-portrait.jpg" 
                  alt={BUSINESS_INFO.contactPerson} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-kepc-navy truncate">
                    {BUSINESS_INFO.contactPerson}
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                    OWNER
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-700 mt-0.5">
                  Owner – Krishna ESIC PF Consultancy (KEPC)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy & Facts */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-kepc-red mb-3">
              <span className="w-6 h-0.5 bg-kepc-red" />
              <span>ABOUT KEPC</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-kepc-navy tracking-tight leading-tight mb-6">
              Experience You Can Rely On.
            </h2>

            {/* Concise Narrative Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <p>
                <strong className="text-kepc-navy font-semibold">Krishna ESIC PF Consultancy</strong> is owned and led by <strong className="text-kepc-navy font-semibold">Ravindra Kumar</strong>. Based in Neemrana, Rajasthan, KEPC provides practical guidance and documentation support for ESIC, EPF, labour licensing and business registration requirements.
              </p>
              <p>
                Through direct owner involvement, careful documentation and dependable local support, we help businesses navigate administrative and statutory compliance processes.
              </p>
            </div>

            {/* 4 Key Business Facts in Compact 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-kepc-navy">Direct Owner Guidance</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Direct communication with business owner Ravindra Kumar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-kepc-navy">Established Consultancy</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Practical consultancy experience in ESIC, EPF and business compliance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-kepc-navy">Neemrana Hub Knowledge</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Familiarity with RIICO and regional commercial regulations.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-kepc-navy">Statutory Accuracy</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Thorough preparation of forms, registers, and filings.</p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <a
                href="#approach"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-kepc-navy hover:bg-kepc-navy-deep text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow hover:shadow-md group"
              >
                <span>Discover Our Approach</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
