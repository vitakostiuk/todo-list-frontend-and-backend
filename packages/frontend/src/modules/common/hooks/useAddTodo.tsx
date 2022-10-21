import { useMutation, useQueryClient } from 'react-query';
import TodoService from '../../services/todo.service';
import { IAddTodo } from '../types/todos.type';

export const useAddTodo = () => {
  const client = useQueryClient();

  const mutate = useMutation((newTodo: IAddTodo) => TodoService.addTodo(newTodo), {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSettled(...params) {
      client.invalidateQueries('todos');
    }
  });

  return mutate;
};
