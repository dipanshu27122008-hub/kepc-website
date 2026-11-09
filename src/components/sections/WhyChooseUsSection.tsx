import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  UserCheck, 
  Layers, 
  GraduationCap, 
  FileSpreadsheet,
  MapPin,
  CheckCircle
} from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      title: "20 Years of Experience",
      description: "Serving commercial and manufacturing enterprises with proven statutory clarity.",
      icon: Award,
      badge: "Track Record"
    },
    {
      title: "Direct Owner Involvement",
      description: "Speak directly with Ravindra Kumar for personal guidance and dedicated attention.",
      icon: UserCheck,
      badge: "Personal Touch"
    },
    {
      title: "Multiple Compliance Services",
      description: "Single destination for ESIC, EPF, Labour Licences, Factory Act, and DIC.",
      icon: Layers,
      badge: "Comprehensive"
    },
    {
      title: "Professional Guidance",
      description: "Clarity on complex regulatory forms, portal filings, and procedural requirements.",
      icon: GraduationCap,
      badge: "Procedural Clarity"
    },
    {
      title: "Documentation Assistance",
      description: "Thorough drafting, assembly, and maintenance of all statutory registers.",
      icon: FileSpreadsheet,
      badge: "Meticulous Support"
    },
    {
      title: "Local Knowledge of Neemrana",
      description: "In-depth familiarity with RIICO industrial zones, regional norms, and practices.",
      icon: MapPin,
      badge: "Regional Grounding"
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-kepc-navy text-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-kepc-navy-deep/80 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-kepc-red/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400 mb-3">
            <span className="w-6 h-0.5 bg-amber-400" />
            <span>DEPENDABLE PARTNERSHIP</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Why Businesses Choose KEPC
          </h2>

          <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
            Practical statutory assistance with personal accountability and dependable regional expertise.
          </p>
        </div>

        {/* 6 Visually Distinct Feature Blocks (3x2 Grid, Clean and Uncluttered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="rounded-2xl p-7 bg-kepc-navy-deep/60 hover:bg-kepc-navy-deep/90 border border-white/10 hover:border-white/25 transition-all duration-300 group hover:-translate-y-1 shadow-soft"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white/10 text-slate-200 group-hover:text-amber-400 group-hover:bg-amber-400/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-display font-medium text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified KEPC service standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
