import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

console.log('====================================================');
console.log(' KEPC PROFESSIONAL BUSINESS WEBSITE — VERIFICATION ');
console.log('====================================================\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`[FAIL] ${testName}: ${details}`);
  }
}

// 1. Check Dist build output
const distPath = path.join(projectRoot, 'dist');
assert(fs.existsSync(distPath), 'Production dist directory exists');
const distHtmlPath = path.join(distPath, 'index.html');
assert(fs.existsSync(distHtmlPath), 'dist/index.html generated');

if (fs.existsSync(distHtmlPath)) {
  const htmlContent = fs.readFileSync(distHtmlPath, 'utf-8');

  // 2. SEO & Metadata Verification
  assert(htmlContent.includes('<title>Krishna ESIC PF Consultancy'), 'Title tag contains brand & full name');
  assert(htmlContent.includes('meta name="description"'), 'Meta description present');
  assert(htmlContent.includes('name="google-site-verification" content="7DkDhvcj1SA3j-yWLyLd-DcOA13xDwc6yjPdJAqh28U"'), 'Google Search Console verification tag present');
  assert(htmlContent.includes('<link rel="canonical" href="https://kepc-website.pages.dev/" />'), 'Canonical URL points to kepc-website.pages.dev');
  assert(htmlContent.includes('<meta property="og:url" content="https://kepc-website.pages.dev/" />'), 'Open Graph URL points to kepc-website.pages.dev');
  assert(htmlContent.includes('"url": "https://kepc-website.pages.dev/"'), 'JSON-LD url points to kepc-website.pages.dev');
  assert(!htmlContent.includes('kepc-consultancy.in'), 'No unverified kepc-consultancy.in domain in index.html');
  assert(htmlContent.includes('Neemrana'), 'Location Neemrana present in metadata');
  assert(htmlContent.includes('"@type": "ProfessionalService"'), 'JSON-LD ProfessionalService schema present');
  assert(htmlContent.includes('9001900715'), 'Verified phone number present in schema');
  assert(htmlContent.includes('ravindarkumar411@gmail.com'), 'Verified email present in schema');
  assert(htmlContent.includes('Ravindra Kumar'), 'Founder Ravindra Kumar in schema');
  assert(htmlContent.includes('Shop No. 120, Shubh Laxmi Complex'), 'Address verified in schema');

  // 3. Asset & font links
  assert(htmlContent.includes('fonts.googleapis.com'), 'Google Fonts preconnect & links present');
  assert(htmlContent.includes('/favicon.svg'), 'Favicon SVG referenced');
}

// 4. Verify Static Assets (robots, sitemap, favicon, logo)
const publicDir = path.join(projectRoot, 'public');
assert(fs.existsSync(path.join(publicDir, 'robots.txt')), 'public/robots.txt exists');
const robotsContent = fs.readFileSync(path.join(publicDir, 'robots.txt'), 'utf-8');
assert(robotsContent.includes('Sitemap: https://kepc-website.pages.dev/sitemap.xml'), 'robots.txt points to correct live sitemap');
assert(!robotsContent.includes('kepc-consultancy.in'), 'robots.txt omits kepc-consultancy.in');

assert(fs.existsSync(path.join(publicDir, 'sitemap.xml')), 'public/sitemap.xml exists');
const sitemapContent = fs.readFileSync(path.join(publicDir, 'sitemap.xml'), 'utf-8');
assert(sitemapContent.includes('<loc>https://kepc-website.pages.dev/</loc>'), 'sitemap.xml contains live homepage URL');
assert(!sitemapContent.includes('#'), 'sitemap.xml contains zero hash URLs');
assert(!sitemapContent.includes('kepc-consultancy.in'), 'sitemap.xml omits kepc-consultancy.in');

assert(fs.existsSync(path.join(publicDir, 'favicon.svg')), 'public/favicon.svg exists');
assert(fs.existsSync(path.join(publicDir, 'images/business-card.jpg')), 'public/images/business-card.jpg exists');

// 5. Verify Single Source of Truth: Business Info Data
const businessInfoPath = path.join(projectRoot, 'src/data/businessInfo.ts');
assert(fs.existsSync(businessInfoPath), 'src/data/businessInfo.ts exists');
const businessInfoCode = fs.readFileSync(businessInfoPath, 'utf-8');

assert(businessInfoCode.includes('Krishna ESIC PF Consultancy'), 'Business name verified');
assert(businessInfoCode.includes('Ravindra Kumar'), 'Contact person Ravindra Kumar verified');
assert(businessInfoCode.includes('9001900715'), 'Phone 9001900715 verified');
assert(businessInfoCode.includes('ravindarkumar411@gmail.com'), 'Email verified');
assert(businessInfoCode.includes('301705'), 'Neemrana Pincode 301705 verified');
assert(businessInfoCode.includes('20'), '20 Years experience verified');
assert(!businessInfoCode.includes('2004'), 'Year 2004 strictly omitted per owner instruction');
assert(businessInfoCode.includes('ownerRole: "Owner"'), 'Owner role verified');
assert(businessInfoCode.includes('is not affiliated with ESIC, EPFO'), 'Mandatory statutory disclaimer verified');

// 5b. Verify Owner Representation and Experience Claims in Core Components
const aboutCode = fs.readFileSync(path.join(projectRoot, 'src/components/sections/AboutSection.tsx'), 'utf-8');
assert(aboutCode.includes('owned and led by'), 'About section presents Ravindra Kumar as owner');
assert(!aboutCode.includes('senior consultant'), 'No senior consultant label in About');

const heroCode = fs.readFileSync(path.join(projectRoot, 'src/components/sections/HeroSection.tsx'), 'utf-8');
assert(heroCode.includes('20 Years of Experience'), 'Hero section contains verified 20 Years of Experience badge');

const whyUsCode = fs.readFileSync(path.join(projectRoot, 'src/components/sections/WhyChooseUsSection.tsx'), 'utf-8');
assert(whyUsCode.includes('title: "20 Years of Experience"'), 'Why Choose Us contains 20 Years of Experience feature card');
assert(!whyUsCode.includes('two decades'), 'Why Choose Us description omits two decades redundancy');
assert(whyUsCode.includes('Direct Owner Involvement'), 'Direct Owner Involvement pillar present');
assert(!whyUsCode.includes('senior consultant'), 'No senior consultant label in WhyChooseUs');

const contactCode = fs.readFileSync(path.join(projectRoot, 'src/components/sections/ContactSection.tsx'), 'utf-8');
assert(contactCode.includes('Owner – KEPC'), 'Contact card displays Owner – KEPC');
assert(!contactCode.includes('Principal Consultant'), 'No Principal Consultant label in Contact');
assert(!contactCode.includes('• 20 Years Experience'), 'Contact owner card omits duplicate 20 Years Experience');
assert(contactCode.includes('Please do not submit Aadhaar or PAN numbers'), 'Contact privacy warning contains approved exact text');

const servicesCodeMain = fs.readFileSync(path.join(projectRoot, 'src/components/sections/ServicesSection.tsx'), 'utf-8');
assert(!servicesCodeMain.includes('isWhiteCard'), 'ServicesSection top 3 cards have consistent background treatment (no white card)');

const logoCode = fs.readFileSync(path.join(projectRoot, 'src/components/common/KEPCLogo.tsx'), 'utf-8');
assert(!logoCode.includes('20 Years Experience'), 'Header logo tagline has no duplicate 20 Years Experience');
assert(fs.existsSync(path.join(publicDir, 'images/owner-portrait.jpg')), 'Clean owner portrait exists');

// 6. Verify 9 Services
const servicesPath = path.join(projectRoot, 'src/data/services.ts');
assert(fs.existsSync(servicesPath), 'src/data/services.ts exists');
const servicesCode = fs.readFileSync(servicesPath, 'utf-8');

const expectedServices = [
  'ESIC Consultancy',
  'EPF Consultancy',
  'Labour Licence',
  'Digital Signature Certificate (DSC)',
  'Factory Act Compliance',
  'Shop Act Registration',
  'Food Licence Assistance',
  'DIC Registration',
  'Other Related Consultancy'
];

expectedServices.forEach(s => {
  assert(servicesCode.includes(s), `Service included: ${s}`);
});

// 7. Verify FAQs
const faqPath = path.join(projectRoot, 'src/data/faqs.ts');
assert(fs.existsSync(faqPath), 'src/data/faqs.ts exists');
const faqCode = fs.readFileSync(faqPath, 'utf-8');

assert(faqCode.includes('What services does KEPC provide?'), 'FAQ 1 present');
assert(faqCode.includes('How can I enquire about ESIC consultancy?'), 'FAQ 2 present');
assert(faqCode.includes('Does KEPC provide EPF-related assistance?'), 'FAQ 3 present');
assert(faqCode.includes('Can I contact KEPC through WhatsApp?'), 'FAQ 4 present');
assert(faqCode.includes('Where is KEPC located?'), 'FAQ 5 present');
assert(faqCode.includes('How can I discuss my registration requirements?'), 'FAQ 6 present');
assert(faqCode.includes('Does KEPC provide assistance for labour licences?'), 'FAQ 7 present');
assert(faqCode.includes('How can I request consultancy?'), 'FAQ 8 present');

// 8. Verify Components Existence
const components = [
  'src/components/layout/Navbar.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/sections/HeroSection.tsx',
  'src/components/sections/AboutSection.tsx',
  'src/components/sections/ServicesSection.tsx',
  'src/components/sections/WhyChooseUsSection.tsx',
  'src/components/sections/ExperienceCounterSection.tsx',
  'src/components/sections/ApproachSection.tsx',
  'src/components/sections/FaqSection.tsx',
  'src/components/sections/ContactSection.tsx',
  'src/components/common/KEPCLogo.tsx',
  'src/components/common/LegalModals.tsx',
];

components.forEach(comp => {
  assert(fs.existsSync(path.join(projectRoot, comp)), `Component exists: ${comp}`);
});

console.log(`\n====================================================`);
console.log(` RESULTS: ${passedTests}/${totalTests} Tests Passed (${Math.round((passedTests/totalTests)*100)}%)`);
console.log(`====================================================\n`);

if (passedTests === totalTests) {
  process.exit(0);
} else {
  process.exit(1);
}
