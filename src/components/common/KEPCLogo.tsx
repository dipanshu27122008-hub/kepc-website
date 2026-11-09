import React from 'react';

interface KEPCLogoProps {
  variant?: 'light' | 'dark' | 'color';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const KEPCLogo: React.FC<KEPCLogoProps> = ({
  variant = 'color',
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  const isLight = variant === 'light';

  // Sizing definitions
  const dimensions = {
    sm: { box: 'h-8 px-2.5 text-base', title: 'text-sm', subtitle: 'text-[10px]' },
    md: { box: 'h-10 px-3.5 text-lg', title: 'text-base', subtitle: 'text-xs' },
    lg: { box: 'h-12 px-4 text-xl', title: 'text-xl', subtitle: 'text-xs' },
    xl: { box: 'h-14 px-5 text-2xl', title: 'text-2xl', subtitle: 'text-sm' },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic [ KEPC ] Boxed Brand Mark directly matching the business card */}
      <div 
        className={`flex items-center justify-center border-2 rounded font-sans font-black tracking-widest transition-all duration-300 ${dimensions.box} ${
          isLight 
            ? 'border-white bg-white/10 text-white shadow-sm' 
            : 'border-kepc-navy bg-white text-kepc-navy shadow-sm'
        }`}
        style={{
          boxShadow: isLight 
            ? '0 2px 8px rgba(0,0,0,0.25)' 
            : '0 2px 8px rgba(20,43,73,0.15)'
        }}
      >
        <span className="flex items-center drop-shadow-sm">
          <span className={isLight ? 'text-white' : 'text-kepc-navy'}>KEP</span>
          <span className="text-kepc-red">C</span>
        </span>
      </div>

      {/* Brand Name Typography */}
      {showSubtitle && (
        <div className="flex flex-col justify-center">
          <span className={`font-bold leading-tight tracking-tight uppercase ${dimensions.title} ${
            isLight ? 'text-white' : 'text-kepc-navy'
          }`}>
            Krishna ESIC PF
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={`font-semibold tracking-widest uppercase ${dimensions.subtitle} ${
              isLight ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Consultancy
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
