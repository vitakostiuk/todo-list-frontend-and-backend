import { useMutation, useQueryClient } from 'react-query';
import TodoServise from '../../services/todo.service';
import { IStatusCompleted } from '../types/todos.type';
import { APP_KEYS } from '../consts';

interface IUpdatedTodo {
  data: IStatusCompleted;
  id: string;
}

export const useUpdateCompleted = () => {
  const client = useQueryClient();

  const mutate = useMutation(
    (values: IUpdatedTodo) => TodoServise.updateCompleted(values.data, values.id),
    {
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
