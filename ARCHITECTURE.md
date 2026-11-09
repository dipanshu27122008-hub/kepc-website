# Architecture Document — Krishna ESIC PF Consultancy (KEPC)

## 1. System Architecture
The application is built as a high-performance, single-page progressive web application utilizing modern frontend tooling:
- **Core Library**: React 18 with TypeScript 5.7
- **Bundler & Dev Server**: Vite 6.0
- **CSS Engine**: Tailwind CSS 3.4 with custom editorial tokens
- **Animation Framework**: Framer Motion 11.15 for smooth scroll-triggered viewport animations
- **Iconography**: Lucide React
- **SEO & Structured Data**: JSON-LD ProfessionalService schema, Open Graph protocol, Semantic HTML5

## 2. Component Hierarchy
```
App
├── Navbar (Sticky, scroll detector, mobile drawer)
├── HeroSection (Photographic hero, dark overlay, editorial typography)
├── AboutSection (Split editorial layout, 20-year narrative)
├── ServicesSection (Asymmetric staggered card layout, 9 verified services)
├── WhyChooseUsSection (Contrasting navy section with 5 verified pillars)
├── ExperienceCounterSection (Animated count-up to 20 years)
├── ApproachSection (4-phase workflow)
├── FaqSection (Keyboard accessible accordion)
├── ContactSection (Validated inquiry form, spam honeypot, direct WhatsApp dispatch)
├── Footer (Dark navy, quick links, statutory disclaimer, back-to-top)
└── LegalModal (Privacy policy & Terms of service)
```

## 3. Design System & Palette
- **Primary Navy**: `#142B49`
- **Deep Navy**: `#0B1B30`
- **Restrained Red Accent**: `#C83B43`
- **Off-White Surface**: `#F7F8FA`
- **Charcoal Text**: `#333B45`
- **Amber Gold**: `#D4AF37`
- **Fonts**: `Plus Jakarta Sans` (body, navigation), `Cinzel` / `Playfair Display` (editorial headings)
