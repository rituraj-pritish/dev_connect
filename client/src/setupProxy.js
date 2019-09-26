const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/user',
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true
    })
  );
  app.use(
    '/profile',
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true
    })
  );
  app.use(
    '/posts',
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true
    })
  );
};
