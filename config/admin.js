module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  // Füge die Admin-URL hinzu, um sicherzustellen, dass Strapi den richtigen Ursprung akzeptiert
  url: env('ADMIN_URL', 'https://strapi.digimedialoop.de/admin'),
  
  // Optional: Erlaube bestimmte Ursprünge für den Admin-Bereich
  cors: {
    origin: ['https://strapi.digimedialoop.de'],  // Zulässige Ursprünge für das Admin-Panel
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],  // Die HTTP-Methoden, die erlaubt sind
    headers: ['Content-Type', 'Authorization'],  // Erlaubte Header
  },
});
