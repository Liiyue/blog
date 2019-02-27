import { Controller } from 'egg';
import * as path from 'path';
import * as fs from 'fs';

export default class HomeController extends Controller {
  async notFound() {
    this.ctx.json('hi, RPC');
  }
}
