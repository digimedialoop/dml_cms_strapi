'use strict';

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins['email'].services.email.send({
        to: 'sabrina@digimedialoop.de',
        from: 'sabrina@digimedialoop.de',
        subject: 'Kontaktanfrage im CMS',
        text: `Ein neuer Kontakt wurde hinzugefügt:\n\nName: ${result.name}\nEmail: ${result.email}\nNachricht: ${result.text}`,
      });
    } catch (err) {
      strapi.log.error('E-Mail konnte nicht gesendet werden:', err);
    }
  },
};