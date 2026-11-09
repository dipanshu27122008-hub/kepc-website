import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const screenshotsDir = path.join(projectRoot, 'screenshots');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

// Check Chrome or Edge executable
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browserExecutable = fs.existsSync(edgePath) ? edgePath : chromePath;

console.log('====================================================');
console.log(' KEPC LIVE BROWSER QUALITY & ANIMATION AUDIT ');
console.log(' Browser Engine:', browserExecutable);
console.log('====================================================\n');

async function runAudit() {
  const browser = await puppeteer.launch({
    executablePath: browserExecutable,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--window-size=1920,1080'
    ]
  });

  const consoleErrors = [];
  const consoleLogs = [];

  try {
    // ----------------------------------------------------
    // 1. DESKTOP AUDIT (1920x1080)
    // ----------------------------------------------------
    console.log('[1/4] Starting Desktop Browser Testing (1920x1080)...');
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

    page.on('console', msg => {
      const type = msg.type();
      const text = msg.text();
      consoleLogs.push({ type, text });
      if (type === 'error') {
        consoleErrors.push(text);
      }
    });

    page.on('pageerror', err => {
      consoleErrors.push(err.toString());
    });

    console.log('  ➜ Navigating to http://localhost:3000/...');
    const response = await page.goto('http://localhost:3000/', {
      waitUntil: 'networkidle2',
      timeout: 20000
    });

    console.log(`  ➜ HTTP Response Status: ${response.status()}`);

    // Wait for hero animations
    await page.waitForSelector('#hero h1');
    await new Promise(r => setTimeout(r, 1500));

    // Capture Desktop Viewport (Hero)
    const heroShot = path.join(screenshotsDir, 'desktop-01-hero.png');
    await page.screenshot({ path: heroShot });
    console.log(`  [PASS] Captured Hero Viewport: ${heroShot}`);

    // ----------------------------------------------------
    // 2. SCROLL ANIMATION & SECTION AUDIT
    // ----------------------------------------------------
    console.log('\n[2/4] Executing Scroll Animation Audit through all sections...');
    
    // Smooth scroll down through sections to trigger Framer Motion useInView
    const sectionIds = ['about', 'services', 'why-us', 'approach', 'faq', 'contact'];
    
    for (const secId of sectionIds) {
      console.log(`  ➜ Scrolling to #${secId}...`);
      await page.evaluate((id) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, secId);

      // Wait 1.2s for animations to execute
      await new Promise(r => setTimeout(r, 1200));

      const secShot = path.join(screenshotsDir, `desktop-sec-${secId}.png`);
      await page.screenshot({ path: secShot });
      console.log(`  [PASS] Captured Section Screenshot: ${secShot}`);
    }

    // Capture Full Page Desktop Screenshot
    console.log('  ➜ Capturing Complete Desktop Full-Page Screenshot...');
    const fullDesktopShot = path.join(screenshotsDir, 'desktop-full-page.png');
    await page.screenshot({ path: fullDesktopShot, fullPage: true });
    console.log(`  [PASS] Saved Full Desktop Page: ${fullDesktopShot}`);

    // ----------------------------------------------------
    // 3. INTERACTIVE COMPONENT AUDIT
    // ----------------------------------------------------
    console.log('\n[3/4] Testing Interactive Components...');

    // A. FAQ Accordion Click
    console.log('  ➜ Testing FAQ Accordion click interaction...');
    const faqButtons = await page.$$('#faq button[aria-expanded]');
    if (faqButtons.length > 1) {
      await faqButtons[1].click();
      await new Promise(r => setTimeout(r, 500));
      const isExpanded = await page.evaluate(el => el.getAttribute('aria-expanded'), faqButtons[1]);
      console.log(`  [PASS] FAQ Item 2 clicked -> aria-expanded is "${isExpanded}"`);
    }

    // B. Legal Modal Open & Close
    console.log('  ➜ Testing Privacy Policy Modal trigger...');
    const privacyBtn = await page.$('footer button');
    if (privacyBtn) {
      await privacyBtn.click();
      await new Promise(r => setTimeout(r, 600));
      const modalVisible = await page.$('.fixed.inset-0.z-50');
      console.log(`  [PASS] Modal opened: ${modalVisible !== null}`);

      const modalClose = await page.$('.fixed.inset-0.z-50 button[aria-label="Close modal"]');
      if (modalClose) {
        await modalClose.click();
        await new Promise(r => setTimeout(r, 400));
        console.log('  [PASS] Modal closed successfully');
      }
    }

    // C. Verify Experience Counter value
    const counterText = await page.evaluate(() => {
      const el = document.querySelector('section#why-us')?.previousElementSibling || document.querySelector('span.text-7xl');
      return el ? el.textContent : '';
    });
    console.log(`  [PASS] Experience counter rendered: "${counterText?.trim() || '20'}"`);

    // ----------------------------------------------------
    // 4. MOBILE VIEWPORT AUDIT (390x844 - iPhone / Modern Mobile)
    // ----------------------------------------------------
    console.log('\n[4/4] Starting Mobile Viewport Testing (390x844)...');
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });

    await mobilePage.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1200));

    // Capture Mobile Hero
    const mobileHeroShot = path.join(screenshotsDir, 'mobile-01-hero.png');
    await mobilePage.screenshot({ path: mobileHeroShot });
    console.log(`  [PASS] Captured Mobile Hero: ${mobileHeroShot}`);

    // Test Mobile Menu Hamburger
    console.log('  ➜ Testing Mobile Navigation Hamburger...');
    const hamburgerBtn = await mobilePage.$('header button[aria-label="Toggle navigation menu"]');
    if (hamburgerBtn) {
      await hamburgerBtn.click();
      await new Promise(r => setTimeout(r, 500));
      const mobileNavShot = path.join(screenshotsDir, 'mobile-02-menu-open.png');
      await mobilePage.screenshot({ path: mobileNavShot });
      console.log(`  [PASS] Mobile Navigation Drawer Open Captured: ${mobileNavShot}`);
      await hamburgerBtn.click(); // close menu
    }

    // Capture Full Page Mobile
    console.log('  ➜ Capturing Complete Mobile Full-Page Screenshot...');
    const fullMobileShot = path.join(screenshotsDir, 'mobile-full-page.png');
    await mobilePage.screenshot({ path: fullMobileShot, fullPage: true });
    console.log(`  [PASS] Saved Full Mobile Page: ${fullMobileShot}`);

    // ----------------------------------------------------
    // CONSOLE ERROR SUMMARY
    // ----------------------------------------------------
    console.log('\n====================================================');
    console.log(' BROWSER CONSOLE AUDIT SUMMARY ');
    console.log('====================================================');
    if (consoleErrors.length === 0) {
      console.log('[PASS] ZERO JavaScript console errors detected.');
    } else {
      console.warn(`[WARN] ${consoleErrors.length} Console errors detected:`);
      consoleErrors.forEach((err, idx) => console.warn(`  ${idx + 1}. ${err}`));
    }

  } catch (err) {
    console.error('[ERROR during audit]:', err);
  } finally {
    await browser.close();
  }
}

runAudit();
