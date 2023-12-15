'use strict';

/**
 * main-branch service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-branch.main-branch');
