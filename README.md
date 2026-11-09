# Krishna ESIC PF Consultancy (KEPC) — Official Business Website

[![Production Build](https://img.shields.io/badge/Build-Passing-emerald)](https://github.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-cyan)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15-purple)](https://www.framer.com/motion/)

A premium, editorial, responsive, production-ready business website designed and built for **Krishna ESIC PF Consultancy (KEPC)** in Neemrana, Rajasthan.

---

## 1. Verified Business Information

| Field | Verified Value |
|---|---|
| **Business Name** | Krishna ESIC PF Consultancy |
| **Brand Identifier** | KEPC |
| **Owner** | Ravindra Kumar (Owner – Krishna ESIC PF Consultancy) |
| **Mobile** | +91 90019 00715 |
| **WhatsApp Channel** | +91 90019 00715 (`https://wa.me/919001900715`) |
| **Official Email** | [ravindarkumar411@gmail.com](mailto:ravindarkumar411@gmail.com) |
| **Physical Address** | Shop No. 120, Shubh Laxmi Complex, Near Hanuman Market, Neemrana (Alwar), Rajasthan 301705 |
| **Experience** | 20 Years |
| **Industrial Coverage** | Neemrana, Behror, RIICO & Alwar Industrial Hubs |

---

## 2. Nine Verified Service Capabilities

1. **ESIC Consultancy**: Assistance with ESIC-related registration, returns, employee documentation, and statutory portal compliance.
2. **EPF Consultancy**: Guidance and assistance for EPF establishment registration, monthly ECR filing, member KYC, and compliance records.
3. **Labour Licence Assistance**: Guidance for principal employers and staffing contractors on contract labour licences, renewals, and Form V documentation.
4. **Digital Signature Certificate (DSC)**: Procedural assistance for acquiring Class 3 DSC tokens for EPFO, ESIC, MCA, and tender platforms.
5. **Factory Act Compliance**: Registration and statutory advisory for industrial manufacturing plants, safety registers, and annual returns.
6. **Shop Act Registration**: Rajasthan Shops and Commercial Establishments Act registration, certificate updates, and compliance registers.
7. **Food Licence Assistance**: Guidance for FSSAI registration and state food licensing applications for businesses and canteens.
8. **DIC Registration**: Assistance for micro, small, and medium enterprises (MSME/Udyam) via District Industries Centre mechanisms.
9. **Other Related Consultancy**: Tailored procedural advisory, statutory health checks, and document reconciliation for regional enterprises.

---

## 3. Visual & Creative Direction (Wix C. Reyes Inspiration)

- **Palette**: Deep Navy (`#0B1B30`), Navy Blue (`#142B49`), Pure White (`#FFFFFF`), Off-White (`#F7F8FA`), and restrained Red Accent (`#C83B43`).
- **Typography**: Clean modern sans-serif (`Plus Jakarta Sans`) paired with elegant display serif headings (`Cinzel` & `Playfair Display`).
- **Editorial Asymmetry**: Alternating dark and light staggered cards inspired by Wix C. Reyes layout, eliminating repetitive 3-column AI slop.
- **Brand Fidelity**: Authentic KEPC boxed emblem reproducing the verified business card.
- **Scroll Animation System**: Framer Motion scroll reveals, subtle hero background scale, staggered service cards, and an exact count-up stopping at 20 Years.
- **Zero Hallucination / Zero AI-Slop**: No fake statistics, no fake customer quotes, no fake government seals.

---

## 4. Getting Started

### Prerequisites
- Node.js (v18+ or v20+)
- npm

### Installation
```bash
# Navigate to project directory
cd Projects/kepc-website

# Install dependencies
npm install
```

### Local Development Server
```bash
# Start local Vite development server
npm run dev
# The website will be available at http://localhost:3000
```

### Production Build & Typecheck
```bash
# Compile TypeScript and bundle optimized static assets
npm run build

# Preview production build
npm run preview
```

### Automated Verification Test Suite
```bash
node tests/verify-website.js
```

---

## 5. Security & Privacy Features

- **No Sensitive Data Traps**: Never collects Aadhaar, PAN, OTP, or UAN credentials through public forms.
- **Anti-Spam Honeypot**: Hidden trap field catches malicious bots without degrading accessibility.
- **Transparent Inquiry Flow**: Clearly formatted WhatsApp and direct email links without fake backend delivery claims.
- **Statutory Independence Notice**: Prominently displays legal clarification that KEPC is an independent private consultancy and not an official government portal.

---

## 6. Project Architecture

```
Projects/kepc-website/
├── public/
│   ├── favicon.svg              # KEPC brand vector icon
│   ├── robots.txt               # SEO crawler directives
│   ├── sitemap.xml              # Search engine index
│   └── images/
│       └── business-card.jpg    # Verified original business card
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── KEPCLogo.tsx     # Authentic vector logo badge
│   │   │   └── LegalModals.tsx  # Privacy & Terms of Service modals
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky dynamic navigation & mobile drawer
│   │   │   └── Footer.tsx       # Dark navy editorial footer with legal notices
│   │   └── sections/
│   │       ├── HeroSection.tsx              # Large photo hero & typography
│   │       ├── AboutSection.tsx             # Editorial split layout & pillars
│   │       ├── ServicesSection.tsx          # Asymmetric staggered cards
│   │       ├── WhyChooseUsSection.tsx       # Navy contrast section
│   │       ├── ExperienceCounterSection.tsx # 20-Year count-up animation
│   │       ├── ApproachSection.tsx          # 4-step workflow
│   │       ├── FaqSection.tsx               # Accessible accordion
│   │       └── ContactSection.tsx           # Validated inquiry form & map
│   ├── data/
│   │   ├── businessInfo.ts      # Single source of truth for business data
│   │   ├── services.ts          # 9 verified service specifications
│   │   └── faqs.ts              # Authentic non-promising compliance FAQs
│   ├── styles/
│   │   └── index.css            # Tailwind directives & smooth animations
│   ├── App.tsx                  # Main application orchestrator
│   └── main.tsx                 # React entry point
├── tests/
│   └── verify-website.js        # Automated 55-point verification suite
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```
