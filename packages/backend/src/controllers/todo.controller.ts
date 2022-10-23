import { Request } from 'express';
import TodoService from '../services/todo.service';
import { ITodo } from '../types/todos.type';

interface TypedRequestBody<T> extends Request {
  body: T;
}

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

  async getById(req: Request<{ todoId: string }>) {
    const { todoId } = req.params;
    const result = await this.todoService.getById(todoId);
    return result;
  }

  async removeById(req: Request<{ todoId: string }>) {
    const { todoId } = req.params;
    const result = await this.todoService.removeById(todoId);
    return result;
  }

  async updateById(req: Request<{ todoId: string }, any, ITodo>) {
    const { todoId } = req.params;
    const result = await this.todoService.updateById(todoId, req.body, { new: true });
    return result;
  }

  async updateStatus(req: Request<{ todoId: string }, any, ITodo>) {
    const { todoId } = req.params;
    const result = await this.todoService.updateStatus(todoId, req.body, { new: true });
    return result;
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
