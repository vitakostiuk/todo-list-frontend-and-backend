import { Todo } from '../models/Todo';
import { ITodo } from '../types/todos.type';

interface IPrivate {
  private: boolean;
}

interface ICompleted {
  completed: boolean;
}

// interface IQueryParams {
//   search?: string;
//   status?: string;
// }

export default class TodoService {
  async findAll(id: string | undefined, queryParams: any) {
    const { search } = queryParams;
    // console.log('status', status);

    // const idToSearch = mongoose.Types.ObjectId(id);

    // const todos = await Todo.aggregate([
    //   {
    //     $match: {
    //       $or: [
    //         {
    //           owner: idToSearch,
    //           title: search,
    //           private: isPrivate
    //         }
    //       ]
    //     }
    //   }
    // ]);
    // console.log('todos', todos);

    // if (!todos) {
    //   return null;
    // }

    // return todos;

    if (search === '') {
      const result = await Todo.find({ owner: id }).populate('owner', 'email');
      return result;
    }

    const result = await Todo.find({ owner: id, title: search }).populate('owner', 'email');
    return result;

    // const result = await Todo.find({ owner }).populate('owner', 'email');
    // return result;
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

  async updateStatusPrivate(id: string, body: IPrivate, obj: { new: boolean }) {
    const result = await Todo.findByIdAndUpdate(id, body, obj);
    return result;
  }

  async updateStatusCompleted(id: string, body: ICompleted, obj: { new: boolean }) {
    const result = await Todo.findByIdAndUpdate(id, body, obj);
    return result;
  }
}
