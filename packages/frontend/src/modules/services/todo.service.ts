import { HttpSerivce } from './http.service';
import { ITodo, IAddTodo, IStatusPrivate, IStatusCompleted } from '../common/types/todos.type';

interface IResponse {
  data: ITodo[];
}

class TodoService extends HttpSerivce {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  getAllTodos() {
    const result: IResponse = this.get({ url: 'todos' }, true);
    return result;
  }

  addTodo(todo: IAddTodo) {
    return this.add(
      {
        url: 'todos',
        data: todo
      },
      true
    );
  }

  getById(todoId: string) {
    return this.getOne(
      {
        url: 'todos',
        id: todoId
      },
      true
    );
  }

  removeById(todoId: string) {
    return this.remove(
      {
        url: 'todos',
        id: todoId
      },
      true
    );
  }

  updateById(todo: IAddTodo, todoId: string) {
    return this.put(
      {
        url: 'todos',
        data: todo,
        id: todoId
      },
      true
    );
  }

  updatePrivate(privateStatus: IStatusPrivate, todoId: string) {
    return this.updatePrivateField(
      {
        url: 'todos',
        data: privateStatus,
        id: todoId
      },
      true
    );
  }

  updateCompleted(completedStatus: IStatusCompleted, todoId: string) {
    return this.updateCompletedField(
      {
        url: 'todos',
        data: completedStatus,
        id: todoId
      },
      true
    );
  }
}

export default new TodoService();
