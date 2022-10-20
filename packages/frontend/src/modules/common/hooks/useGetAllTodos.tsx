import { useQuery } from 'react-query';
import TodoService from '../../services/todo.service';

export const useGetAllTodos = () => {
  const query = useQuery('all todos', () => TodoService.getAllTodos());

  return query;
};
