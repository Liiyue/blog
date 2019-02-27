import { Controller } from 'egg';

export default class BaseController extends Controller {
    public async home() {
        await this.ctx.render('index.html');
    }
}