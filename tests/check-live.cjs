const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body
        });
      });
    }).on('error', reject);
  });
}

async function runLiveAudit() {
  console.log('====================================================');
  console.log(' KEPC LIVE CLOUDFLARE PAGES SEO AUDIT ');
  console.log('====================================================\n');

  // 1. Check Homepage
  console.log('[1/3] Probing Homepage: https://kepc-website.pages.dev/');
  const home = await fetchUrl('https://kepc-website.pages.dev/');
  console.log('  ➜ HTTP Status:', home.statusCode);
  const hasGsc = home.body.includes('name="google-site-verification" content="7DkDhvcj1SA3j-yWLyLd-DcOA13xDwc6yjPdJAqh28U"');
  console.log('  ➜ GSC Verification Tag Preserved:', hasGsc);
  const hasCanonical = home.body.includes('<link rel="canonical" href="https://kepc-website.pages.dev/" />');
  console.log('  ➜ Canonical URL (https://kepc-website.pages.dev/):', hasCanonical);
  const hasOgUrl = home.body.includes('<meta property="og:url" content="https://kepc-website.pages.dev/" />');
  console.log('  ➜ Open Graph URL:', hasOgUrl);
  const hasOldDomainInHome = home.body.includes('kepc-consultancy.in');
  console.log('  ➜ Unverified Domain Omitted:', !hasOldDomainInHome);

  // 2. Check Sitemap XML
  console.log('\n[2/3] Probing Sitemap: https://kepc-website.pages.dev/sitemap.xml');
  const sitemap = await fetchUrl('https://kepc-website.pages.dev/sitemap.xml');
  console.log('  ➜ HTTP Status:', sitemap.statusCode);
  console.log('  ➜ Content-Type:', sitemap.headers['content-type']);
  const sitemapCorrectLoc = sitemap.body.includes('<loc>https://kepc-website.pages.dev/</loc>');
  console.log('  ➜ Loc URL Correct:', sitemapCorrectLoc);
  const sitemapNoHash = !sitemap.body.includes('#');
  console.log('  ➜ Zero Hash URLs:', sitemapNoHash);
  const sitemapNoOldDomain = !sitemap.body.includes('kepc-consultancy.in');
  console.log('  ➜ Unverified Domain Omitted:', sitemapNoOldDomain);

  // 3. Check robots.txt
  console.log('\n[3/3] Probing Robots: https://kepc-website.pages.dev/robots.txt');
  const robots = await fetchUrl('https://kepc-website.pages.dev/robots.txt');
  console.log('  ➜ HTTP Status:', robots.statusCode);
  const robotsCorrectSitemap = robots.body.includes('Sitemap: https://kepc-website.pages.dev/sitemap.xml');
  console.log('  ➜ Sitemap Header Correct:', robotsCorrectSitemap);
  const robotsNoOldDomain = !robots.body.includes('kepc-consultancy.in');
  console.log('  ➜ Unverified Domain Omitted:', robotsNoOldDomain);

  console.log('\n====================================================');
  const allPassed = home.statusCode === 200 && hasGsc && hasCanonical && hasOgUrl && !hasOldDomainInHome &&
                    sitemap.statusCode === 200 && sitemapCorrectLoc && sitemapNoHash && sitemapNoOldDomain &&
                    robots.statusCode === 200 && robotsCorrectSitemap && robotsNoOldDomain;
  console.log(' OVERALL LIVE AUDIT RESULT:', allPassed ? 'ALL PASS (100%)' : 'DEPLOYMENT IN PROGRESS - RETRYING');
  console.log('====================================================\n');

  if (!allPassed) {
    process.exit(1);
  }
}

runLiveAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
