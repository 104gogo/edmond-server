'use strict';

const Controller = require('egg').Controller;

class TransformController extends Controller {
  async index() {
    const { code } = this.ctx.request.body;

    const { code: transformCode } = await this.ctx.service.transform.index(code);
    this.ctx.body = JSON.stringify({ content: transformCode });
  }
}

module.exports = TransformController;
