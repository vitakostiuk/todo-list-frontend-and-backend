import { useMutation, useQueryClient } from 'react-query';
import TodoServise from '../../services/todo.service';
import { IAddTodo } from '../types/todos.type';
import { APP_KEYS } from '../consts';

interface IUpdatedTodo {
  data: IAddTodo;
  id: string;
}

export const useUpdateById = () => {
  const client = useQueryClient();

  const mutate = useMutation(
    (values: IUpdatedTodo) => TodoServise.updateById(values.data, values.id),
    {
      onSuccess: () => {
        // eslint-disable-next-line no-alert
        alert('Update todo succeful');
      },
      onError: (error: any) => {
        // eslint-disable-next-line no-alert
        alert(error.message);
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSettled(...params) {
        client.invalidateQueries(APP_KEYS.QUERY_KEYS.TODOS);
      }
    }
  );

  return mutate;
};
