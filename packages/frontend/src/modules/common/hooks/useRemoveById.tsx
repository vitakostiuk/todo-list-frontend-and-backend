import { useMutation, useQueryClient } from 'react-query';
import TodoService from '../../services/todo.service';
import { APP_KEYS } from '../consts';

export const useRemoveById = () => {
  const client = useQueryClient();

  const mutate = useMutation((id: string) => TodoService.removeById(id), {
    onSuccess: () => {
      alert('Delete todo succeful');
    },
    onError: (error: any) => {
      alert(error.message);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSettled(...params) {
      client.invalidateQueries(APP_KEYS.QUERY_KEYS.TODOS);
    }
  });

  return mutate;
};
