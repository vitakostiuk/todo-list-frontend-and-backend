import React, { useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useGetById } from '../../hooks/useGetById';
import { useUpdateById } from '../../hooks/useUpdateById';

interface IParams {
  todoId: string;
}

interface MyFormValues {
  title: string;
  description: string;
  toggle: boolean;
  completed: boolean;
}

interface ILocation {
  state: {
    from: { pathname: string; search: string; hash: string; state: undefined };
  };
}

const TodoItem = () => {
  const location: ILocation = useLocation();
  const [link] = useState(() => location?.state?.from);

  const [isOpenEditForm, setIsOpenEditForm] = useState(false);

  const params: IParams = useParams();

  const history = useHistory();

  const { data } = useGetById(params.todoId);

  const updateByIdMutation = useUpdateById();

  const initialValues: MyFormValues = {
    title: data?.data.title,
    description: data?.data.todo,
    toggle: data?.data.private,
    completed: data?.data.completed
  };

  const onClickGoBack = () => {
    history.push(link);
  };

  const onClickEdit = () => {
    setIsOpenEditForm((prevIsOpenEditForm) => !prevIsOpenEditForm);
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
      {data && data?.data.completed === true ? <div>Completed: YES</div> : <div>Completed: NO</div>}
      <button type="button" onClick={onClickGoBack}>
        Back
      </button>
      <button type="button" onClick={onClickEdit}>
        Edit
      </button>
      {/* {isOpenEditForm && <TodoForm onClick={() => {}} />} */}
      {isOpenEditForm && (
        <div>
          <h1>Edit todo</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              const updatedTodo = {
                data: {
                  title: values.title,
                  todo: values.description,
                  private: values.toggle,
                  completed: values.completed
                },
                id: params.todoId
              };
              updateByIdMutation.mutate(updatedTodo);
              // eslint-disable-next-line no-console
              // console.log({ values, actions });
              onClickEdit();
              actions.setSubmitting(false);
            }}
          >
            <Form>
              <Field id="title" name="title" placeholder="title" />
              <Field
                id="description"
                type="arialabel"
                name="description"
                placeholder="description"
              />
              <Field id="completed" type="checkbox" name="completed" />
              <Field id="private" type="checkbox" name="toggle" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
