import { useQuery } from 'react-query';
import TodoService from '../../services/todo.service';

export const useGetById = (id: string) => {
  const query = useQuery(['get one', id], () => TodoService.getById(id));

  return query;
};
