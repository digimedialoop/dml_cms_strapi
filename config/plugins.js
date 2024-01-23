module.exports = ({ env }) => ({
    email: {
      provider: 'sendmail',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'info@digimedialoop.de',
        defaultReplyTo: 'info@digimedialoop.de',
      },
    },
  });