import { useMutation } from 'react-query';
import TodoService from '../../services/todo.service';
import { ITodo } from '../types/todos.type';

export const useAddTodo = () => {
  const mutate = useMutation('add todo', (newTodo: ITodo) => TodoService.addTodo(newTodo));

  return mutate;
};
