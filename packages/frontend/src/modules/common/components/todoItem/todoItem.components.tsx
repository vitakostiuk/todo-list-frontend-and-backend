import React, { useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
// import { useQuery } from 'react-query';
// import TodoService from '../../../services/todo.service';
import { useGetById } from '../../hooks/useGetById';

interface IParams {
  todoId: string;
}

interface ILocation {
  state: { pathname: string; search: string; hash: string; state: undefined };
}

const TodoItem = () => {
  const location: ILocation = useLocation();
  const [link] = useState(() => location?.state);

  const params: IParams = useParams();

  const history = useHistory();

  const { data } = useGetById(params.todoId);
  // const { data } = useQuery(['get one', params.todoId], () => TodoService.getById(params.todoId));

  const onClickGoBack = () => {
    history.push(link);
  };

  return (
    <div>
      {data && (
        <>
          <h3>{data?.data.title}</h3>
          <p>{data?.data.todo}</p>
        </>
      )}
      {data && data?.data.private === true ? <div>Private: YES</div> : <div>Private: NO</div>}
      <button type="button" onClick={onClickGoBack}>
        Back
      </button>
    </div>
  );
};

export default TodoItem;
