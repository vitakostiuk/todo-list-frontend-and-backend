import { HttpSerivce } from './http.service';
import { IAddTodo, IStatusPrivate, IStatusCompleted } from '../common/types/todos.type';

class TodoService extends HttpSerivce {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  async getAllTodos(params: string) {
    const result = await this.get({ url: `todos?${params}` }, true);
    return result;
  }

  // getAllTodos() {
  //   const result = this.get({ url: 'todos' });
  //   return result;
  // }

  async addTodo(todo: IAddTodo) {
    const result = await this.add(
      {
        url: 'todos',
        data: todo
      },
      true
    );
    return result;
  }

  async getById(todoId: string) {
    const result = await this.getOne(
      {
        url: 'todos',
        id: todoId
      },
      true
    );
    return result;
  }

  async removeById(todoId: string) {
    const result = await this.remove(
      {
        url: 'todos',
        id: todoId
      },
      true
    );
    return result;
  }

  async updateById(todo: IAddTodo, todoId: string) {
    const result = await this.put(
      {
        url: 'todos',
        data: todo,
        id: todoId
      },
      true
    );
    return result;
  }

  async updatePrivate(privateStatus: IStatusPrivate, todoId: string) {
    const result = await this.updatePrivateField(
      {
        url: 'todos',
        data: privateStatus,
        id: todoId
      },
      true
    );
    return result;
  }

  async updateCompleted(completedStatus: IStatusCompleted, todoId: string) {
    const result = await this.updateCompletedField(
      {
        url: 'todos',
        data: completedStatus,
        id: todoId
      },
      true
    );
    return result;
  }
}

export default new TodoService();
