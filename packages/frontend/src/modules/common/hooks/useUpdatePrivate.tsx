import { useMutation, useQueryClient } from 'react-query';
import TodoServise from '../../services/todo.service';
import { IStatusPrivate } from '../types/todos.type';

interface IUpdatedTodo {
  data: IStatusPrivate;
  id: string;
}

export const useUpdatePrivate = () => {
  const client = useQueryClient();

  const mutate = useMutation(
    (values: IUpdatedTodo) => TodoServise.updatePrivate(values.data, values.id),
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSettled(...params) {
        client.invalidateQueries('todos');
      }
    }
  );

  return mutate;
};
