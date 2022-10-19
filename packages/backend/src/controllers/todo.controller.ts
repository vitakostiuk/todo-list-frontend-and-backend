import { Request } from 'express';
import TodoService from '../services/todo.service';
import { ITodo } from '../types/todos.type';

//   params: {
//     todoId: string;
//   };

interface TypedRequestBody<T> extends Request {
  body: T;
}

// interface TypedRequestParams<B> extends Request {
//   params: B;
// }

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo() {
    const todos = await this.todoService.findAll();
    return todos;
  }

  async addTodo(req: TypedRequestBody<ITodo>) {
    const result = await this.todoService.addTodo(req.body);
    return result;
  }

  async getById(req: Request) {
    const { todoId } = req.params;
    const result = await this.todoService.getById(todoId);
    return result;
  }

  async removeById(req: Request) {
    const { todoId } = req.params;
    const result = await this.todoService.removeById(todoId);
    return result;
  }

  async updateById(req: Request) {
    const { todoId } = req.params;
    const result = await this.todoService.updateById(todoId, req.body, { new: true });
    return result;
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
