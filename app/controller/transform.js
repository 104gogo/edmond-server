const Controller = require('egg').Controller;

class TransformController extends Controller {
  async index() {
    console.log(this.ctx.request.body);
    this.ctx.body = 'Hello world';
  }
}

module.exports = TransformController;