// eslint-disable-next-line import/no-extraneous-dependencies
// import axios from 'axios';
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

/*
class TodoService extends HttpSerivce {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  getAllTodos() {
    return this.get({ url: 'todos' });
  }

  addTodo() {
    return this.add({
      url: 'todos',
      data: {
        title: 'front1',
        todo: 'front1 descr',
        private: true
      }
    });
  }

  getById() {
    return this.getOne({
      url: 'todos',
      id: '634e7f13c8a26a37d067cbe2'
    });
  }

  removeById() {
    return this.remove({
      url: 'todos',
      id: '634fd32ff5576133b80663ff'
    });
  }

  updateById() {
    return this.put({
      url: 'todos',
      data: {
        title: 'front1',
        todo: 'front1 update',
        private: true
      },
      id: '63503c7b1ee2e447684e2811'
    });
  }
}
*/
