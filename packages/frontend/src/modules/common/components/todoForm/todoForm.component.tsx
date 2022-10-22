/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form } from 'formik';
import { useAddTodo } from '../../hooks/useAddTodo';
import * as Styled from './todoForm.styled';

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
    <Styled.Container>
      <Styled.FormTitle>Add todo</Styled.FormTitle>
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
          <Styled.InputWrapper>
            <Styled.Label htmlFor="title">Add Title</Styled.Label>
            <Styled.StyleField id="title" name="title" placeholder="Title..." />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            {' '}
            <Styled.Label htmlFor="description">Add Description</Styled.Label>
            <Styled.Textarea
              id="description"
              name="description"
              placeholder="Description..."
              // as="textarea"
            />
          </Styled.InputWrapper>
          <Styled.InputCheckbox>
            {' '}
            <Styled.Label htmlFor="private">Private</Styled.Label>
            <Styled.FieldCheckbox id="private" type="checkbox" name="toggle" />
          </Styled.InputCheckbox>
          <Styled.BtnWrap>
            {' '}
            <Styled.Button type="submit">Add Todo</Styled.Button>
          </Styled.BtnWrap>
        </Form>
      </Formik>
    </Styled.Container>
  );
};
