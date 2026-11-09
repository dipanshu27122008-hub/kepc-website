import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  FileCheck2, 
  Briefcase, 
  KeyRound, 
  Factory, 
  Store, 
  UtensilsCrossed, 
  Building2, 
  Compass, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';
import { getWhatsAppLinkForService } from '../../data/businessInfo';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  FileCheck2,
  Briefcase,
  KeyRound,
  Factory,
  Store,
  UtensilsCrossed,
  Building2,
  Compass
};

export const ServicesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Gradient & Accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-kepc-navy-deep via-slate-900 to-kepc-navy-deep" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-kepc-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Wix-inspired Editorial Typography */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">
            <span className="w-6 h-0.5 bg-amber-400" />
            <span>STATUTORY EXPERTISE</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Consultancy Services
          </h2>

          <p className="mt-3 text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            Practical guidance for important business registration and compliance requirements.
          </p>
        </div>

        {/* Feature Row: Top 3 Core Services in Consistent Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {SERVICES_DATA.slice(0, 3).map((service, index) => {
            const Icon = iconMap[service.iconName] || ShieldCheck;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="relative rounded-2xl p-7 sm:p-8 bg-slate-800/90 text-white border border-slate-700/80 hover:border-slate-500/80 shadow-soft hover:shadow-editorial transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Bar with Icon & Octagonal Category Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-white/10 text-amber-400 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border bg-white/10 text-slate-200 border-white/15">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-medium tracking-tight text-white mb-2.5">
                    {service.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Divider line */}
                  <div className="w-full border-t border-slate-700/80 mb-5" />

                  {/* Exactly 2 Scannable Bullet Points (Clean, uncluttered) */}
                  <ul className="space-y-2 mb-6">
                    {service.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-amber-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service WhatsApp CTA */}
                <a
                  href={getWhatsAppLinkForService(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 group/btn bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    Enquire About This Service
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Remaining 6 Services in a Compact 3x2 Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4"
        >
          {SERVICES_DATA.slice(3).map((service) => {
            const Icon = iconMap[service.iconName] || Compass;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/60 hover:border-slate-500/80 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm hover:shadow-soft"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="p-2.5 rounded-lg bg-slate-700/50 text-slate-200 group-hover:text-amber-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] uppercase tracking-wider font-semibold text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700">
                      {service.category}
                    </span>
                  </div>

                  <h4 className="text-lg font-display font-medium text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-1.5 mb-5 text-xs text-slate-400">
                    {service.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-slate-500 shrink-0" />
                        <span className="truncate">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsAppLinkForService(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-3 border-t border-slate-700/70 text-xs font-semibold text-slate-300 hover:text-white transition-colors group/link"
                >
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3 h-3 text-emerald-400" />
                    Enquire via WhatsApp
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-amber-400 transition-transform group-hover/link:translate-x-0.5" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Clean Disclosing Note */}
        <div className="mt-14 text-center text-xs text-slate-400 max-w-xl mx-auto px-4">
          <p>
            * Note: Krishna ESIC PF Consultancy provides independent procedural guidance. Statutory registrations remain subject to competent authority approvals.
          </p>
        </div>

      </div>
    </section>
  );
};
