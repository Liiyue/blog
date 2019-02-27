import { CasUser } from './../interface/cas-user';
import { Service } from 'egg';


export default class User extends Service {
    async getUser(): Promise<CasUser> {
        if (this.config.serverEnv === 'local') {
            return {
                username: 'H8216',
                nickName: '黑猪先生',
                telephone: '18882188218',
                email: '29812021@qq.com'
            };
        } else {
            return this.service.cas.getUser();
        }
    }
}
