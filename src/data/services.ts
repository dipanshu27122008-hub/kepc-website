export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  keyPoints: string[];
  category: 'Statutory' | 'Licensing' | 'Registration' | 'Advisory';
  iconName: string;
  featured?: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "esic-consultancy",
    title: "ESIC Consultancy",
    category: "Statutory",
    shortDesc: "End-to-end assistance with ESIC registration, monthly returns, and statutory records.",
    description: "Guidance for employers on Employees' State Insurance Corporation requirements, return filings, and record-keeping.",
    keyPoints: [
      "Establishment registration & employee code generation",
      "Monthly contribution return assistance & audit records"
    ],
    iconName: "ShieldCheck",
    featured: true
  },
  {
    id: "epf-consultancy",
    title: "EPF Consultancy",
    category: "Statutory",
    shortDesc: "Comprehensive guidance for EPFO registration, monthly ECR filing, and member KYC.",
    description: "End-to-end guidance for Employees' Provident Fund compliance, electronic return workflows, and member support.",
    keyPoints: [
      "EPFO establishment registration & code allocation",
      "Monthly ECR filing, challan guidance & KYC alignment"
    ],
    iconName: "FileCheck2",
    featured: true
  },
  {
    id: "labour-licence",
    title: "Labour Licence",
    category: "Licensing",
    shortDesc: "Assistance with contract labour licences, renewals, and statutory Form V documentation.",
    description: "Assistance for principal employers and contractors under the Contract Labour (Regulation & Abolition) Act.",
    keyPoints: [
      "Contract Labour Act licence procurement & renewal",
      "Statutory registers, returns & Form V documentation"
    ],
    iconName: "Briefcase",
    featured: true
  },
  {
    id: "digital-signature-certificate",
    title: "Digital Signature Certificate (DSC)",
    category: "Registration",
    shortDesc: "Procurement and portal mapping for Class 3 DSC tokens across statutory portals.",
    description: "Facilitation for obtaining Class 3 Digital Signature Certificates required for EPFO, ESIC, and MCA filings.",
    keyPoints: [
      "Class 3 DSC issuance with secure cryptographic token",
      "Portal association for EPFO, ESIC & commercial filings"
    ],
    iconName: "KeyRound"
  },
  {
    id: "factory-act",
    title: "Factory Act Compliance",
    category: "Statutory",
    shortDesc: "Advisory on factory licensing, annual returns, and mandatory workplace safety registers.",
    description: "Guidance for manufacturing units in Neemrana on Factory Act registration, annual returns, and statutory records.",
    keyPoints: [
      "Factory licence applications & periodic renewals",
      "Statutory annual return filing & register compliance"
    ],
    iconName: "Factory"
  },
  {
    id: "shop-act",
    title: "Shop Act Registration",
    category: "Registration",
    shortDesc: "Registration and renewal guidance under the Rajasthan Shops & Establishments Act.",
    description: "Assistance with commercial premises registration, renewals, and workplace notice requirements.",
    keyPoints: [
      "Commercial establishment registration & certificate updates",
      "Statutory workplace notice & register maintenance"
    ],
    iconName: "Store"
  },
  {
    id: "food-licence",
    title: "Food Licence Assistance",
    category: "Licensing",
    shortDesc: "Guidance through FSSAI registration and state food licence application processes.",
    description: "Procedural assistance for food business operators, commercial canteens, and processing establishments.",
    keyPoints: [
      "FSSAI basic registration & state licence guidance",
      "Documentation preparation for hygiene & premises layout"
    ],
    iconName: "UtensilsCrossed"
  },
  {
    id: "dic-registration",
    title: "DIC Registration",
    category: "Registration",
    shortDesc: "MSME/Udyam enterprise formalisation via District Industries Centre mechanisms.",
    description: "Facilitation for regional industrial units through District Industries Centre documentation.",
    keyPoints: [
      "DIC / Udyam registration & category classification",
      "Enterprise formalisation for Neemrana industrial corridors"
    ],
    iconName: "Building2"
  },
  {
    id: "other-consultancy-services",
    title: "Other Related Consultancy",
    category: "Advisory",
    shortDesc: "Personalised assistance for bespoke business registrations and statutory liaison.",
    description: "Customized advisory and practical procedural assistance for diverse commercial compliance needs.",
    keyPoints: [
      "Commercial statutory health checks & documentation review",
      "Direct one-on-one guidance with owner Ravindra Kumar"
    ],
    iconName: "Compass"
  }
];
