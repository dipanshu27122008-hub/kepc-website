import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { SERVICES_DATA } from '../../data/services';

interface FormState {
  name: string;
  businessName: string;
  phone: string;
  service: string;
  message: string;
  honeypot: string; // Anti-spam trap
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    businessName: '',
    phone: '',
    service: SERVICES_DATA[0].title,
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};

    if (formData.honeypot.trim() !== '') {
      errs.honeypot = 'Automated bot activity detected.';
      setErrors(errs);
      return false;
    }

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!phoneClean) {
      errs.phone = 'Please provide a contact phone number.';
    } else if (!/^[0-9]{10}$/.test(phoneClean)) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details of your requirement.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedText = `*New KEPC Inquiry*\n\n*Name:* ${formData.name.trim()}\n${formData.businessName ? `*Business/Org:* ${formData.businessName.trim()}\n` : ''}*Phone:* ${formData.phone.trim()}\n*Service Required:* ${formData.service}\n*Message:* ${formData.message.trim()}`;
    const whatsappUrl = `https://wa.me/919001900715?text=${encodeURIComponent(formattedText)}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white text-kepc-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-kepc-red mb-3">
            <span className="w-6 h-0.5 bg-kepc-red" />
            <span>DIRECT INQUIRY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium text-kepc-navy tracking-tight leading-tight">
            Let's Discuss Your Business Requirements.
          </h2>

          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Connect directly with owner Ravindra Kumar to review your statutory registration and compliance requirements in Neemrana.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Immediately Visible Office Details & Direct Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-kepc-offwhite border border-slate-200 shadow-soft">
              <h3 className="text-lg font-display font-semibold text-kepc-navy mb-5 pb-3 border-b border-slate-200">
                Verified Office Information
              </h3>

              <div className="space-y-5 text-sm">
                
                {/* Owner Identity */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl overflow-hidden border border-slate-200 shadow-sm shrink-0">
                    <img 
                      src="/images/owner-portrait.jpg" 
                      alt={BUSINESS_INFO.contactPerson} 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Owner – KEPC</span>
                    <p className="text-base font-bold text-kepc-navy">{BUSINESS_INFO.contactPerson}</p>
                    <p className="text-xs text-slate-500">Owner – Krishna ESIC PF Consultancy (KEPC)</p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Direct Telephone</span>
                    <p className="text-sm font-semibold text-kepc-navy">
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-kepc-red transition-colors">
                        {BUSINESS_INFO.phoneFormatted}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500">Direct line to Owner Ravindra Kumar</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">WhatsApp Channel</span>
                    <p className="text-sm font-semibold text-kepc-navy">
                      <a 
                        href={BUSINESS_INFO.whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-emerald-600 inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>+91 90019 00715</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </p>
                    <p className="text-xs text-slate-500">Instant messaging for business enquiries</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Official Email</span>
                    <p className="text-xs sm:text-sm font-semibold text-kepc-navy break-all">
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-kepc-navy-light transition-colors">
                        {BUSINESS_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Address & Google Maps */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Office Location</span>
                    <p className="text-xs sm:text-sm font-medium text-kepc-navy leading-snug mt-0.5">
                      {BUSINESS_INFO.address.shop}, {BUSINESS_INFO.address.complex}, Near Hanuman Market, Neemrana (Alwar), Rajasthan 301705
                    </p>

                    <a 
                      href={BUSINESS_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-kepc-navy hover:text-kepc-red mt-2 transition-colors"
                    >
                      <span>Get Google Maps Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Timings</span>
                    <p className="text-xs text-slate-700">{BUSINESS_INFO.workingHours}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200 shadow-soft">
              
              <div className="mb-6">
                <h3 className="text-xl font-display font-semibold text-kepc-navy mb-1">
                  Send a Direct Inquiry
                </h3>
                <p className="text-xs text-slate-500">
                  Submissions open directly in WhatsApp with your details formatted for prompt attention.
                </p>
              </div>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center my-6 space-y-3"
                >
                  <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold">Inquiry Ready!</h4>
                  <p className="text-xs leading-relaxed max-w-sm mx-auto">
                    WhatsApp is opening to transmit your message directly to KEPC Owner Ravindra Kumar at +91 9001900715.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-emerald-700 underline hover:text-emerald-900 pt-1"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Honeypot field */}
                  <div className="hidden" aria-hidden="true">
                    <input 
                      type="text" 
                      id="anti_spam_trap" 
                      tabIndex={-1} 
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Your Full Name <span className="text-kepc-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.name ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:ring-kepc-navy focus:border-kepc-navy'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-600 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Organisation Name <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Engineering"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-kepc-navy focus:border-kepc-navy transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number <span className="text-kepc-red">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit mobile number"
                        maxLength={12}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:ring-kepc-navy focus:border-kepc-navy'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Service Required <span className="text-kepc-red">*</span>
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-kepc-navy focus:border-kepc-navy transition-all"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Requirements <span className="text-kepc-red">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your statutory enquiry (e.g. new ESIC registration, labour licence renewal, etc.)."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.message ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-300 focus:ring-kepc-navy focus:border-kepc-navy'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-600 mt-1">{errors.message}</p>}
                  </div>

                  {/* Privacy Warning Banner */}
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950">
                    <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      Please do not submit Aadhaar or PAN numbers, UANs, OTPs, passwords, banking credentials, or sensitive employee documents through this public enquiry form. KEPC will advise you on appropriate document sharing when required.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-kepc-navy hover:bg-kepc-navy-deep text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow hover:shadow-md active:scale-[0.99] group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kepc-navy"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                    <span>Submit & Connect with Owner</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
