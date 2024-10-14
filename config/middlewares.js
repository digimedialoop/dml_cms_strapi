module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'img-src': ['*'],
          'default-src': ["'self'", 'https:'],
          'script-src': ["'self'", 'https:'],
          'connect-src': ["'self'", 'https:', 'http:'],
          'frame-src': ["'self'", 'https:'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://test.digimedialoop.de', 'https://digimedialoop.de', 'http://localhost:3000'], // Füge hier deine Domains hinzu
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
