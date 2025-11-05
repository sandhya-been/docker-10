const http = require('http');

const PORT = process.env.PORT || 3000;

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Docker CI/CD App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #eef4f7;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .container {
      background: #fff;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      text-align: center;
    }
    h1 {
      color: #007acc;
      margin-bottom: 10px;
    }
    p {
      color: #333;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Hello from Docker CI/CD!</h1>
    <p>Your Node.js app is running inside a Docker container — with Jenkins automation 🚀</p>
  </div>
</body>
</html>`;

// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlContent);
});

// Start the server only when app.js is run directly (not during tests)
if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
  });
}

module.exports = server;
