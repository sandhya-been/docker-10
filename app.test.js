const http = require('http');
const server = require('./app');

test('Server responds with HTML content', (done) => {
  // Use an available port dynamically to avoid conflicts
  server.listen(0, () => {
    const { port } = server.address();
    http.get(`http://localhost:${port}`, (res) => {
      expect(res.statusCode).toBe(200);
      expect(res.headers['content-type']).toMatch(/html/);
      server.close(done);
    });
  });
});
