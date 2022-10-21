import { useMutation, useQueryClient } from 'react-query';
import TodoServise from '../../services/todo.service';
import { IAddTodo } from '../types/todos.type';

interface IUpdatedTodo {
  data: IAddTodo;
  id: string;
}

export const useUpdateById = () => {
  const client = useQueryClient();

  const mutate = useMutation(
    (values: IUpdatedTodo) => TodoServise.updateById(values.data, values.id),
    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSettled(...params) {
        client.invalidateQueries('todos');
      }
    }
  );

  return mutate;
};
