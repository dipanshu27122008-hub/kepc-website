export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Services' | 'Contact';
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-services",
    question: "What services does KEPC provide?",
    answer: "Krishna ESIC PF Consultancy (KEPC) provides guidance and procedural assistance for ESIC compliance, EPF compliance, Labour Licences, Class 3 Digital Signature Certificates (DSC), Factory Act compliance, Rajasthan Shop Act registration, Food Licence (FSSAI) applications, District Industries Centre (DIC) registrations, and related commercial compliance requirements.",
    category: "General"
  },
  {
    id: "faq-esic",
    question: "How can I enquire about ESIC consultancy?",
    answer: "You can enquire about ESIC consultancy by calling owner Ravindra Kumar directly at 9001900715, sending a message via WhatsApp, using the inquiry form on this website, or emailing ravindarkumar411@gmail.com. We will review your establishment's details and explain the applicable statutory steps.",
    category: "Services"
  },
  {
    id: "faq-epf",
    question: "Does KEPC provide EPF-related assistance?",
    answer: "Yes, KEPC provides comprehensive procedural guidance for EPF establishment registration, monthly return preparation, electronic challan cum return (ECR) workflows, member KYC updates, and statutory compliance record maintenance.",
    category: "Services"
  },
  {
    id: "faq-whatsapp",
    question: "Can I contact KEPC through WhatsApp?",
    answer: "Yes. KEPC has a dedicated WhatsApp channel at +91 9001900715. You can click any 'Talk to the Owner' or 'Enquire About This Service' button on this site to begin a direct conversation with prefilled details.",
    category: "Contact"
  },
  {
    id: "faq-location",
    question: "Where is KEPC located?",
    answer: "Our office is located at Shop No. 120, Shubh Laxmi Complex, Near Hanuman Market, Neemrana (Alwar), Rajasthan 301705. We regularly assist commercial and manufacturing businesses operating across the Neemrana, Behror, and Alwar industrial corridors.",
    category: "General"
  },
  {
    id: "faq-registration",
    question: "How can I discuss my registration requirements?",
    answer: "You can connect with us via phone, WhatsApp, or email, or visit our office in Neemrana during business hours (Monday to Saturday, 9:30 AM to 7:00 PM). We review your business type, employee strength, and specific commercial activities to advise on the relevant registrations required.",
    category: "Services"
  },
  {
    id: "faq-labour-licence",
    question: "Does KEPC provide assistance for labour licences?",
    answer: "Yes. KEPC assists principal employers, staffing contractors, and service providers with contract labour licence applications, renewals, Form V documentation, and statutory register maintenance under applicable labour regulations.",
    category: "Services"
  },
  {
    id: "faq-request-consultancy",
    question: "How can I request consultancy?",
    answer: "You can request consultancy by submitting the quick inquiry form on our contact page, calling 9001900715, or messaging via WhatsApp. Please note that KEPC is an independent consultancy providing advisory and facilitation; statutory processing times and final approvals remain subject to the respective competent government authorities.",
    category: "Contact"
  }
];
