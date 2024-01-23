module.exports = ({ env }) => ({
    email: {
      provider: 'smtp',
      providerOptions: {
        host: env('SMTP_HOST', 'your-smtp-host'),
        port: env.int('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME', 'your-smtp-username'),
          pass: env('SMTP_PASSWORD', 'your-smtp-password'),
        },
      },
      settings: {
        defaultFrom: 'info@digimedialoop.de',
        defaultReplyTo: 'info@digimedialoop.de',
      },
    },
  });