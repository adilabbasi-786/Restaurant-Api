'use strict';

/**
 * main-branch router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::main-branch.main-branch');
