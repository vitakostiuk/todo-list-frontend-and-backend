import { useMutation, useQueryClient } from 'react-query';
import TodoService from '../../services/todo.service';

export const useRemoveById = () => {
  const client = useQueryClient();

  const mutate = useMutation((id: string) => TodoService.removeById(id), {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSettled(...params) {
      client.invalidateQueries('todos');
    }
  });

  return mutate;
};
