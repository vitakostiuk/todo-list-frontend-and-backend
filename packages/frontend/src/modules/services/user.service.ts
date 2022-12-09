import { HttpSerivce } from './http.service';
import { IUser } from '../common/types/user.types';

// interface IResponse {
//   data: ITodo[];
// }

class UserService extends HttpSerivce {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  async register(credentials: IUser) {
    return this.add(
      {
        url: 'user/register',
        data: credentials
      },
      false
    );
  }

  async login(credentials: IUser) {
    const result = await this.add(
      {
        url: 'user/login',
        data: credentials
      },
      false
    );
    return result;
  }

  async changePassword(credentials: IUser) {
    const result = this.add({
      url: 'user/change-password',
      data: credentials
    });
    return result;
  }

  async logout() {
    const result = this.get({ url: 'user/logout' }, true);
    return result;
  }

  async current() {
    const result = this.get({ url: 'user/current' }, true);
    return result;
  }
}

export default new UserService();
