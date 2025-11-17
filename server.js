//This is a sample XSS Code snippet used in the example

// This is the insecure Node.js application analyzed by the SAST workflow.
// It contains a clear Reflected XSS vulnerability.

const http = require('http');
const url = require('url'); // Contains the legacy 'url.parse' API

const server = http.createServer((req, res) => {

  // 1. VULNERABILITY (LOW): Use of legacy 'url.parse' API.
  // The 'url.parse()' method is deprecated and can lead to
  // inconsistent parsing, especially with malformed URLs.
  const query = url.parse(req.url, true).query;

  // 2. VULNERABILITY (MEDIUM): Reflected Cross-Site Scripting (XSS)
  // The 'name' parameter from the URL query is taken directly
  // from user input.
  const name = query.name || 'Guest';

  res.writeHead(200, { 'Content-Type': 'text/html' });

  // The 'name' variable is embedded directly into the HTML response
  // without any sanitization or output encoding.
  //
  // EXPLOIT: http://localhost:3000/?name=<script>alert('XSS')</script>
  res.end(`<h1>Hello, ${name}</h1>`);
});

server.listen(3000, () => {
  console.log('Vulnerable server running at http://localhost:3000/');
});
