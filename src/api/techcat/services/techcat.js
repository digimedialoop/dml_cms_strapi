'use strict';

/**
 * techcat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::techcat.techcat');
