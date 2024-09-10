const http = require('http');

const hostname = '0.0.0.0'; // Bind to all network interfaces
const port = process.env.PORT || 3000; // Use PORT environment variable or fallback to 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Render!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

