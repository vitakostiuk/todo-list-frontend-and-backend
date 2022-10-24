import { useQuery } from 'react-query';
import TodoService from '../../services/todo.service';
import { APP_KEYS } from '../consts';

export const useGetById = (id: string) => {
  const query = useQuery([APP_KEYS.QUERY_KEYS.TODOS, id], () => TodoService.getById(id));

  return query;
};
