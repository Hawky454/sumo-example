'use strict';

/* eslint-env node */

const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const knex = require('knex')(config);

module.exports = {
    list: () => knex('matches'),
    get: id => knex('matches').where('id', id).first(),
};
