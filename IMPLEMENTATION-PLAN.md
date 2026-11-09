# Implementation Plan — Krishna ESIC PF Consultancy (KEPC)

## Phase 1: Environment & Project Setup
- [x] Scaffold project directory under `Projects/kepc-website`
- [x] Configure `package.json`, Vite, TypeScript, Tailwind CSS, PostCSS
- [x] Install dependencies (`react`, `react-dom`, `vite`, `tailwindcss`, `framer-motion`, `lucide-react`)
- [x] Extract and copy verified business card assets to `public/images/`

## Phase 2: Design Tokens & Single Source of Truth
- [x] Define color palette (`#142B49`, `#0B1B30`, `#C83B43`, `#F7F8FA`, `#333B45`)
- [x] Implement `src/data/businessInfo.ts` with verified Neemrana contact details
- [x] Implement `src/data/services.ts` covering all 9 verified services
- [x] Implement `src/data/faqs.ts` with accurate, non-promising compliance answers
- [x] Implement authentic `KEPCLogo` vector component reproducing the business card mark

## Phase 3: Core Section Implementations
- [x] Section 1: Sticky Navigation Header & Mobile Drawer
- [x] Section 2: Full-Width Photographic Hero with Oversized Typography
- [x] Section 3: Editorial Split About Section
- [x] Section 4: Asymmetric Staggered Services Grid (Wix C. Reyes reference)
- [x] Section 5: Why Businesses Choose KEPC (High-Contrast Navy Section)
- [x] Section 6: Experience Counter Section (Count-up to 20 Years)
- [x] Section 7: 4-Step Approach Timeline
- [x] Section 8: Accessible FAQ Accordion
- [x] Section 9: Validated Contact Section with Honeypot & WhatsApp Dispatch
- [x] Section 10: Dark Navy Editorial Footer & Statutory Independence Statement
- [x] Legal Modals: Privacy Policy & Terms of Service

## Phase 4: SEO, Verification & Build
- [x] Meta tags, Open Graph, and JSON-LD ProfessionalService structured data
- [x] `public/robots.txt` and `public/sitemap.xml`
- [x] TypeScript strict typecheck passing with zero errors
- [x] Production build generated (`dist/`)
- [x] Automated 55-point verification test suite passing (100%)
