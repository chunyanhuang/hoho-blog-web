'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getIndexHtml(ctx) {
    await ctx.render('home/index.html');
  }

  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async test() {
    const { ctx } = this;
    ctx.body = '测试接口';
  }
}

module.exports = HomeController;
