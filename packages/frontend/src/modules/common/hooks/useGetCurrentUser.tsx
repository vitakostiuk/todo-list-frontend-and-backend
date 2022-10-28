import { useQuery } from 'react-query';
import UserService from '../../services/user.service';
import { APP_KEYS } from '../consts';
// import { ITodo } from '../types/todos.type';

export const useGetCurrentUser = () => {
  const query = useQuery(APP_KEYS.QUERY_KEYS.USER, () => UserService.current());

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
