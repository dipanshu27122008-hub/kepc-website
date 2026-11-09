import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

export const ExperienceCounterSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = 20;
    const duration = 1000;
    const stepTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-kepc-offwhite text-kepc-navy border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-soft border border-slate-100 relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left: 20+ Years as Strong Visual Focal Point */}
            <div className="lg:col-span-5 flex flex-col items-start justify-center border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-kepc-red mb-2">
                <Award className="w-4 h-4 text-kepc-red" />
                <span>VERIFIED TRACK RECORD</span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-7xl sm:text-8xl lg:text-9xl font-display font-extrabold text-kepc-navy tracking-tighter leading-none">
                  {count}
                </span>
                <span className="text-4xl sm:text-5xl font-display font-light text-kepc-red">
                  +
                </span>
              </div>

              <span className="text-xl sm:text-2xl font-display font-medium text-slate-800 tracking-tight mt-1">
                Years of Experience
              </span>
            </div>

            {/* Right: Concise Supporting Statement & 3 Micro-Badges (No wall of text) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-kepc-navy leading-snug mb-4">
                  Experience that helps businesses approach compliance and registration requirements with greater clarity.
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  Providing commercial and manufacturing establishments across Neemrana and Rajasthan with dependable, practical procedural advisory.
                </p>

                <div className="flex flex-wrap gap-3 text-xs text-slate-700 font-medium">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Direct Owner Guidance</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Neemrana Industrial Belt</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Statutory Procedural Clarity</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
