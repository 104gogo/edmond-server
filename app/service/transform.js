'use strict';

const Service = require('egg').Service;
const { transformSync } = require('@babel/core');

const babel = require('../public/.babelrc.js');
class TransformService extends Service {
  async index(code) {
    const options = Object.assign(babel, {
      babelrc: false,
    });

    const result = transformSync(code, options);

    return result;
  }
}

module.exports = TransformService;
