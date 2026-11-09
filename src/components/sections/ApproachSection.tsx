import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIncoming, 
  MessageSquare, 
  FileText, 
  Headphones, 
  AlertCircle 
} from 'lucide-react';
import { getWhatsAppGeneralLink } from '../../data/businessInfo';

export const ApproachSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Initial Enquiry",
      desc: "Reach out via phone, WhatsApp, or form with your specific compliance or registration need.",
      icon: PhoneIncoming,
    },
    {
      num: "02",
      title: "Requirement Discussion",
      desc: "We discuss your workforce scale, commercial category, and applicable statutory guidelines.",
      icon: MessageSquare,
    },
    {
      num: "03",
      title: "Guidance & Documentation",
      desc: "Step-by-step assistance in compiling, verifying, and preparing requisite forms and registers.",
      icon: FileText,
    },
    {
      num: "04",
      title: "Follow-up & Assistance",
      desc: "Ongoing support with portal filings, monthly returns, renewals, and compliance records.",
      icon: Headphones,
    }
  ];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-white text-kepc-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-kepc-red mb-3">
            <span className="w-6 h-0.5 bg-kepc-red" />
            <span>HOW WE WORK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-kepc-navy tracking-tight leading-tight">
            Our Approach
          </h2>

          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            A clear, dependable process tailored to your enterprise's statutory requirements.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-kepc-offwhite hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-slate-300 shadow-soft hover:shadow-editorial transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-display font-bold text-slate-300 group-hover:text-kepc-red transition-colors">
                        {step.num}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-white group-hover:bg-kepc-navy group-hover:text-white text-kepc-navy shadow-sm border border-slate-100 flex items-center justify-center transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-display font-semibold text-kepc-navy mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/60 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>Phase {idx + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Process Note */}
        <div className="mt-10 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600 max-w-2xl mx-auto">
          <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p>
            Process timelines vary depending on the specific registration category and applicable government guidelines.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <a
            href={getWhatsAppGeneralLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-kepc-navy hover:bg-kepc-navy-deep text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow hover:shadow-md transition-all duration-200"
          >
            <span>Begin Step 1: Initial Enquiry</span>
          </a>
        </div>

      </div>
    </section>
  );
};
