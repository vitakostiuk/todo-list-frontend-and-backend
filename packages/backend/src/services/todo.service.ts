import { Todo } from '../models/Todo';
import { ITodo } from '../types/todos.type';

export default class TodoService {
  async findAll(owner: string | undefined) {
    const result = await Todo.find({ owner }).populate('owner', 'email');
    return result;
  }

  async addTodo(body: ITodo) {
    const result = await Todo.create(body);
    return result;
  }

  async getById(id: string) {
    const result = await Todo.findById(id);
    return result;
  }

  async removeById(id: string) {
    const result = await Todo.findByIdAndRemove(id);
    return result;
  }

  async updateById(id: string, body: ITodo, obj: { new: boolean }) {
    const result = await Todo.findByIdAndUpdate(id, body, obj);
    return result;
  }

  async updateStatus(id: string, body: ITodo, obj: { new: boolean }) {
    const result = await Todo.findByIdAndUpdate(id, body, obj);
    return result;
  }
}
