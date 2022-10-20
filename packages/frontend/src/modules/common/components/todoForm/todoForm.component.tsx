/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useMutation } from 'react-query';
import TodoService from '../../../services/todo.service';
import { ITodo } from '../../types/todos.type';

interface MyFormValues {
  title: string;
  description: string;
  toggle: boolean;
}

interface IProps {
  onClick: () => void;
}

export const TodoForm = ({ onClick }: IProps) => {
  const initialValues: MyFormValues = { title: '', description: '', toggle: false };

  const { data, mutate } = useMutation('add todo', (newTodo: ITodo) =>
    TodoService.addTodo(newTodo)
  );
  // eslint-disable-next-line no-console
  console.log('data', data);

  // const { data } = useQuery('put', () => TodoService.updateById());
  // console.log(data);
  return (
    <div>
      <h1>Add todo</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          const newTodo = {
            title: values.title,
            todo: values.description,
            private: values.toggle
          };

          mutate(newTodo);
          // eslint-disable-next-line no-console
          console.log('newTodo', newTodo);
          // eslint-disable-next-line no-console
          console.log({ values, actions });
          actions.setSubmitting(false);
          onClick();
        }}
      >
        <Form>
          <label htmlFor="title">Add Title</label>
          <Field id="title" name="title" placeholder="title" />
          <label htmlFor="description">Add Description</label>
          <Field id="description" type="arialabel" name="description" placeholder="description" />
          <label htmlFor="private">Private</label>
          <Field id="private" type="checkbox" name="toggle" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
