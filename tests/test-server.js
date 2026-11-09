import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const server = http.createServer((req, res) => {
  let filePath = path.join(distDir, req.url === '/' ? 'index.html' : req.url);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath);
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml',
    '.json': 'application/json'
  };

  const contentType = mimeTypes[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Error');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(5000, '127.0.0.1', () => {
  console.log('Testing HTTP server on 127.0.0.1:5000...');
  
  http.get('http://127.0.0.1:5000/', (res) => {
    console.log(`Status Code: ${res.statusCode}`);
    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', () => {
      console.log(`Received ${data.length} bytes.`);
      const titleMatch = data.match(/<title>(.*?)<\/title>/);
      console.log(`HTML Title: ${titleMatch ? titleMatch[1] : 'Not Found'}`);
      server.close(() => {
        console.log('Server probe completed successfully.');
        process.exit(0);
      });
    });
  }).on('error', (err) => {
    console.error('Request failed:', err.message);
    server.close();
    process.exit(1);
  });
});
