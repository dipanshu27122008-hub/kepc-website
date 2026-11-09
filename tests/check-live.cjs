const https = require('https');

const targetUrl = 'https://kepc-website.pages.dev/';
const expectedTag = '7DkDhvcj1SA3j-yWLyLd-DcOA13xDwc6yjPdJAqh28U';

console.log('Fetching live Cloudflare Pages URL:', targetUrl);

https.get(targetUrl, (res) => {
  console.log('HTTP Status Code:', res.statusCode);
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const hasTag = html.includes(expectedTag);
    console.log('Verification token found in HTML:', hasTag);
    const metaTagMatch = html.match(/<meta[^>]*google-site-verification[^>]*>/i);
    if (metaTagMatch) {
      console.log('Detected Tag:', metaTagMatch[0]);
    } else {
      console.log('No google-site-verification meta tag found yet (deployment may still be in progress).');
    }
  });
}).on('error', (err) => {
  console.error('Fetch error:', err.message);
});
