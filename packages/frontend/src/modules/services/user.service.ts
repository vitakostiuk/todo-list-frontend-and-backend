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

  register(credentials: IUser) {
    return this.add({
      url: 'user/register',
      data: credentials
    });
  }

  login(credentials: IUser) {
    return this.add({
      url: 'user/login',
      data: credentials
    });
  }

  // removeById(todoId: string) {
  //   return this.remove({
  //     url: 'todos',
  //     id: todoId
  //   });
  // }

  // updateById(todo: IAddTodo, todoId: string) {
  //   return this.put({
  //     url: 'todos',
  //     data: todo,
  //     id: todoId
  //   });
  // }

  // updatePrivate(privateStatus: IStatusPrivate, todoId: string) {
  //   return this.updatePrivateField({
  //     url: 'todos',
  //     data: privateStatus,
  //     id: todoId
  //   });
  // }

  // updateCompleted(completedStatus: IStatusCompleted, todoId: string) {
  //   return this.updateCompletedField({
  //     url: 'todos',
  //     data: completedStatus,
  //     id: todoId
  //   });
  // }
}

export default new UserService();
