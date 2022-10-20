import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
// import { useMutation } from 'react-query';
// import TodoService from '../../../services/todo.service';
import { useGetAllTodos } from '../../hooks/useGetAllTodos';
import { useRemoveById } from '../../hooks/useRemoveById';

interface ILocation {
  state: { pathname: string; search: string; hash: string; state: undefined };
}

interface IParams {
  todoId: string;
}

const TodoList = () => {
  const { data, isLoading, error } = useGetAllTodos();
  // const { data, isLoading, error } = useQuery('all todos', () => TodoService.getAllTodos());
  // eslint-disable-next-line no-console
  console.log(data?.data);

  const location: ILocation = useLocation();

  const params: IParams = useParams();

  const mutation = useRemoveById();
  // eslint-disable-next-line no-console
  console.log('delete mutation', mutation);
  // const mutation = useMutation('remove', () => TodoService.removeById(params.todoId));
  // console.log('mutation', mutation);

  const deleteTodo = async () => {
    await mutation.mutateAsync(params.todoId);
  };

  return (
    <div>
      {isLoading && <div>Loading....</div>}
      {!isLoading && data && (
        <ul>
          {data?.data.map(({ _id, title, todo }) => (
            <li key={_id}>
              <h3>{title}</h3>
              <p>{todo}</p>
              <Link to={{ pathname: `/${_id}`, state: location }}>Viev</Link>
              <button type="button" onClick={deleteTodo}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      {error && <div>Something went wrong</div>}
    </div>
  );
};

export default TodoList;
