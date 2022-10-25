import { useQuery } from 'react-query';
import TodoService from '../../services/todo.service';
import { APP_KEYS } from '../consts';
// import { ITodo } from '../types/todos.type';

export const useGetAllTodos = () => {
  const query = useQuery(APP_KEYS.QUERY_KEYS.TODOS, () => TodoService.getAllTodos());

  return query;
};

// export const useGetAllTodos = (filter: string) => {
//   const query = useQuery('todos', () => TodoService.getAllTodos(), {
//     onError: (error: any) => {
//       // eslint-disable-next-line no-console
//       console.log(error);
//     },
//     select: ({ data }) => data.filter((todo) => todo.title.includes(filter))
//   });

//   return query;
// };
