import { useMutation, useQueryClient } from 'react-query';
import TodoService from '../../services/todo.service';
import { IAddTodo } from '../types/todos.type';
import { APP_KEYS } from '../consts';

export const useAddTodo = () => {
  const client = useQueryClient();

  const mutate = useMutation((newTodo: IAddTodo) => TodoService.addTodo(newTodo), {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSettled(...params) {
      client.invalidateQueries(APP_KEYS.QUERY_KEYS.TODOS);
    }
  });

  return mutate;
};
