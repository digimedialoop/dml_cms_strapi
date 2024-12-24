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
          'connect-src': ["'self'", 'https:', 'http:', 'https://strapi.digimedialoop.de'],
          'frame-src': ["'self'", 'https:'],
        },
      },
    },
  },
  'strapi::cors',
  /*{
    name: 'strapi::cors',
    config: {
      origin: ['https://test.digimedialoop.de', 'https://strapi.digimedialoop.de', 'https://digimedialoop.de', 'http://localhost:3000'], // Füge hier deine Domains hinzu
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
      keepHeaderOnError: true,
    },
  },*/
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
