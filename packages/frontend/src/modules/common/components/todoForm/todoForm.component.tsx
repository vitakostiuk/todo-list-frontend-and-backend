/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field } from 'formik';
// import { useQuery } from 'react-query';
// import TodoService from '../../services/todo.service';

interface MyFormValues {
  title: string;
  description: string;
  private: boolean;
}

export const TodoForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = { title: '', description: '', private: false };
  // const { data } = useQuery('all todos', () => TodoService.getAllTodos());
  // console.log(data);

  // const { data:response, isLoading,error, status } = useQuery('add todo', () => TodoService.addTodo());
  // console.log(data);

  // const { data } = useQuery('get one', () => TodoService.getById());
  // console.log(data);

  // const { data } = useQuery('remove', () => TodoService.removeById());
  // console.log(data);

  // const { data } = useQuery('put', () => TodoService.updateById());
  // console.log(data);
  return (
    <div>
      <h1>Add todo</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          // console.log({ values, actions });
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="title">Add Title</label>
          <Field id="title" name="title" placeholder="title" />
          <label htmlFor="description">Add Description</label>
          <Field id="description" type="arialabel" name="description" placeholder="description" />
          <label htmlFor="private">Private</label>
          <Field id="private" type="checkbox" name="checked" value="Private" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
