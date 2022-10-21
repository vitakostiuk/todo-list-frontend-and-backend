import { useQuery } from 'react-query';
import TodoService from '../../services/todo.service';
// import { ITodo } from '../types/todos.type';

export const useGetAllTodos = () => {
  const query = useQuery('todos', () => TodoService.getAllTodos());

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
