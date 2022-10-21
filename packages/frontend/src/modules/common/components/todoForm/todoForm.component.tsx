/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useAddTodo } from '../../hooks/useAddTodo';

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

  const addTodoMutation = useAddTodo();

  return (
    <div>
      <h1>Add todo</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          const newTodo = {
            title: values.title,
            todo: values.description,
            private: values.toggle,
            completed: false
          };

          addTodoMutation.mutate(newTodo);
          // eslint-disable-next-line no-console
          // console.log({ values, actions });
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
