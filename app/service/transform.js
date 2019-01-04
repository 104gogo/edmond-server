'use strict';

const Service = require('egg').Service;
const { transformSync } = require('@babel/core');

const CustomError = require('../extend/CustomError');
const babel = require('../public/.babelrc.js');
class TransformService extends Service {
  async index(code) {
    const options = Object.assign(babel, {
      babelrc: false,
    });

    let result = {};
    try {
      result = transformSync(code, options);
    } catch (e) {
      throw new CustomError('代码转译失败！');
    }

    return result;
  }
}

module.exports = TransformService;
