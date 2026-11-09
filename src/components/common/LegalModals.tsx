import React from 'react';
import { X, ShieldAlert, FileText, Lock } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-kepc-navy text-white border-b border-kepc-navy-deep">
          <div className="flex items-center gap-3">
            {type === 'privacy' ? (
              <Lock className="w-5 h-5 text-amber-400" />
            ) : (
              <FileText className="w-5 h-5 text-amber-400" />
            )}
            <h3 className="font-heading font-bold text-lg text-white">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions of Service'}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-700 leading-relaxed">
          {/* Statutory Disclaimer Box */}
          <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-md text-amber-900 text-xs flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
            <div>
              <p className="font-bold">Statutory Notice & Independence Clarification:</p>
              <p className="mt-1">
                {BUSINESS_INFO.disclaimer} We operate as an independent commercial facilitation and advisory consultancy based in Neemrana, Rajasthan.
              </p>
            </div>
          </div>

          {type === 'privacy' ? (
            <>
              <div>
                <h4 className="font-bold text-kepc-navy text-base mb-1">1. Information We Collect</h4>
                <p>
                  Krishna ESIC PF Consultancy (KEPC) collects only voluntarily provided contact information (such as your full name, business or organisation name, telephone number, email address, and service interest) through our contact and inquiry channels.
                </p>
                <p className="mt-2 text-rose-700 font-medium">
                  We do not collect sensitive identity credentials, such as Aadhaar numbers, PAN passwords, UAN portal passwords, or financial banking credentials through this public website.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-kepc-navy text-base mb-1">2. Purpose of Collection</h4>
                <p>
                  Any information gathered is utilized strictly to respond to your inquiries, schedule business compliance consultations, and assist with statutory registration advisory services.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-kepc-navy text-base mb-1">3. Data Sharing & Security</h4>
                <p>
                  We do not sell, rent, or trade your contact data to third parties or marketing brokers. All client communications are treated with strict confidentiality.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-kepc-navy text-base mb-1">4. Contact & Inquiries</h4>
                <p>
                  For any privacy inquiries regarding KEPC, please reach out directly to Ravindra Kumar at {BUSINESS_INFO.email} or by phone at {BUSINESS_INFO.phoneFormatted}.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-bold text-kepc-navy text-base mb-1">1. Scope of Consultancy Services</h4>
                <p>
                  Krishna ESIC PF Consultancy (KEPC) provides professional assistance, procedural guidance, and documentation preparation for statutory registrations including ESIC, EPF, Labour Licences, Factory Act, Shop & Establishment Act, FSSAI, and DIC registrations.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-kepc-navy text-base mb-1">2. No Guarantee of Government Outcomes</h4>
                <p>
                  KEPC provides advisory facilitation. We do not and cannot guarantee government approvals, issuance timelines, or statutory decisions, as these remain solely at the discretion and jurisdiction of the respective government departments and statutory bodies.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-kepc-navy text-base mb-1">3. Client Responsibilities</h4>
                <p>
                  Clients are responsible for providing authentic, complete, and legally valid documentation and figures for all statutory filings and registration applications.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-kepc-navy text-base mb-1">4. Jurisdiction</h4>
                <p>
                  Any operational disputes or matters related to consultancy engagements are subject to the competent courts of Neemrana / Alwar district, Rajasthan, India.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-kepc-navy text-white text-xs font-semibold rounded hover:bg-kepc-navy-deep transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
