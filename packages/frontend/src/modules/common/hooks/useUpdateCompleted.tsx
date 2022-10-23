import { useMutation, useQueryClient } from 'react-query';
import TodoServise from '../../services/todo.service';
import { IStatusCompleted } from '../types/todos.type';

interface IUpdatedTodo {
  data: IStatusCompleted;
  id: string;
}

export const useUpdateCompleted = () => {
  const client = useQueryClient();

  const mutate = useMutation(
    (values: IUpdatedTodo) => TodoServise.updateCompleted(values.data, values.id),
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSettled(...params) {
        client.invalidateQueries('todos');
      }
    }
  );

  return mutate;
};
