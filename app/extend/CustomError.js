'use strict';

const { EggBaseError } = require('egg-errors');

class CustomError extends EggBaseError {
  constructor(message) {
    super({ message, code: 'CUSTOM_CODE' });
  }
}

module.exports = CustomError;
