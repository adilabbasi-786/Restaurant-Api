'use strict';

/**
 * main-branch controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::main-branch.main-branch');
