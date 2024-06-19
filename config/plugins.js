module.exports = ({ env }) => ({
    email: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'info@digimedialoop.de',
        defaultReplyTo: 'info@digimedialoop.de',
      },
    },
    customization: {
      enabled: true,
      resolve: './customization',
    },
    'editorjs': {
      enabled: true,
    },
  });