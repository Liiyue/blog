// 'use strict';

// const Controller = require('egg').Controller;

// class CommonController extends Controller {
//     async fail() {
//         await this.ctx.render('ERROR_404.html');
//     }
//     async error() {
//         await this.ctx.render('ERROR_500.html');
//     }
//     async proxy() {
//         await this.ctx.proxyPass('target').response();

//     }
// }

// module.exports = CommonController;

import { Controller } from 'egg';

export default class CommonController extends Controller {
    async proxy() {
        await this.ctx.proxyPass('target').response();
    }
}
