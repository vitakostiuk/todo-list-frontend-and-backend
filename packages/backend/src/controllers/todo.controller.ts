import { Response, Request } from 'express';
import TodoService from '../services/todo.service';
import { addSchema } from '../models/Todo';
import createError from '../helpers/createError';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(_: Request, res: Response) {
    const todos = await this.todoService.findAll();
    // res.send(todos);
    res.json(todos);
  }

  async addTodo(req: Request, res: Response) {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw createError(400, 'Missing required name field');
    }
    const result = await this.todoService.addTodo(req.body);
    res.status(201).json(result);
  }

  async getById(req: Request, res: Response) {
    const { todoId } = req.params;
    const result = await this.todoService.getById(todoId);
    if (!result) {
      throw createError(404);
    }
    res.json(result);
  }

  async removeById(req: Request, res: Response) {
    const { todoId } = req.params;
    const result = await this.todoService.removeById(todoId);
    if (!result) {
      throw createError(404);
    }
    res.json({ message: 'Contact deleted' });
  }

  async updateById(req: Request, res: Response) {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw createError(400, 'Missing required name field');
    }
    const { todoId } = req.params;
    const result = await this.todoService.updateById(todoId, req.body, { new: true });
    if (!result) {
      throw createError(404);
    }
    res.json(result);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
