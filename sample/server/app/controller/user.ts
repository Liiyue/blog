import { Controller } from 'egg';

export default class UserController extends Controller {
  async getInfo() {
    const user = await this.service.user.getUser();
    this.ctx.json(user);
  }
}
