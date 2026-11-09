export interface BusinessInfo {
  businessName: string;
  brandName: string;
  tagline: string;
  contactPerson: string;
  ownerTitle: string;
  ownerRole: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappUrl: string;
  email: string;
  address: {
    shop: string;
    complex: string;
    landmark: string;
    locality: string;
    district: string;
    state: string;
    pincode: string;
    full: string;
  };
  googleMapsUrl: string;
  experienceYears: number;
  workingHours: string;
  disclaimer: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  businessName: "Krishna ESIC PF Consultancy",
  brandName: "KEPC",
  tagline: "Business Compliance, Made Simpler.",
  contactPerson: "Ravindra Kumar",
  ownerTitle: "Owner – Krishna ESIC PF Consultancy (KEPC)",
  ownerRole: "Owner",
  phone: "9001900715",
  phoneFormatted: "+91 90019 00715",
  whatsapp: "919001900715",
  whatsappUrl: "https://wa.me/919001900715",
  email: "ravindarkumar411@gmail.com",
  address: {
    shop: "Shop No. 120",
    complex: "Shubh Laxmi Complex",
    landmark: "Near Hanuman Market",
    locality: "Neemrana",
    district: "Alwar",
    state: "Rajasthan",
    pincode: "301705",
    full: "Shop No. 120, Shubh Laxmi Complex, Near Hanuman Market, Neemrana (Alwar), Rajasthan 301705"
  },
  googleMapsUrl: "https://maps.google.com/?q=Shubh+Laxmi+Complex+Near+Hanuman+Market+Neemrana+Rajasthan+301705",
  experienceYears: 20,
  workingHours: "Monday – Saturday: 9:30 AM – 7:00 PM",
  disclaimer: "Krishna ESIC PF Consultancy (KEPC) is an independent consultancy. It is not an official government website and is not affiliated with ESIC, EPFO or any government department."
};

export const getWhatsAppLinkForService = (serviceName: string) => {
  const message = `Hello Ravindra ji, I would like to enquire about ${serviceName} assistance through Krishna ESIC PF Consultancy (KEPC).`;
  return `https://wa.me/919001900715?text=${encodeURIComponent(message)}`;
};

export const getWhatsAppGeneralLink = () => {
  const message = "Hello Ravindra ji, I would like to consult with Krishna ESIC PF Consultancy (KEPC) regarding business compliance and registration services.";
  return `https://wa.me/919001900715?text=${encodeURIComponent(message)}`;
};
