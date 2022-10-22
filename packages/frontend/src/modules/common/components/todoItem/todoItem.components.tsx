import React, { useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { useGetById } from '../../hooks/useGetById';
import { useUpdateById } from '../../hooks/useUpdateById';
import * as Styled from './todoItem.styled';
import * as FormStyled from '../todoForm/todoForm.styled';

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
          <Styled.TodoTitle>{data?.data.title}</Styled.TodoTitle>
          <Styled.Title>Describton:</Styled.Title>
          <Styled.Describtion>{data?.data.todo}</Styled.Describtion>
        </>
      )}

      <Styled.StateWrapper>
        <Styled.Title>Private:</Styled.Title>
        {data && data?.data.private === true ? (
          <Styled.TrueWrapper>
            <Styled.Toggle />
          </Styled.TrueWrapper>
        ) : (
          <Styled.FalseWrapper>
            <Styled.Toggle />
          </Styled.FalseWrapper>
        )}
      </Styled.StateWrapper>

      <Styled.StateWrapper>
        <Styled.Title>Completed:</Styled.Title>
        {data && data?.data.completed === true ? (
          <Styled.TrueWrapper>
            <Styled.Toggle />
          </Styled.TrueWrapper>
        ) : (
          <Styled.FalseWrapper>
            <Styled.Toggle />
          </Styled.FalseWrapper>
        )}
      </Styled.StateWrapper>

      <Styled.EditWrapper>
        <Styled.BtnEdit type="button" onClick={onClickEdit}>
          Edit
        </Styled.BtnEdit>

        {/* {isOpenEditForm && <TodoForm onClick={() => {}} />} */}
        {isOpenEditForm && (
          <Styled.FormContainer>
            <FormStyled.FormTitle>Edit todo</FormStyled.FormTitle>
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
                <FormStyled.InputWrapper>
                  <FormStyled.Label htmlFor="title">Add Title</FormStyled.Label>
                  <FormStyled.StyleField id="title" name="title" placeholder="Title..." />
                </FormStyled.InputWrapper>

                <FormStyled.InputWrapper>
                  {' '}
                  <FormStyled.Label htmlFor="description">Add Description</FormStyled.Label>
                  <FormStyled.Textarea
                    id="description"
                    name="description"
                    placeholder="Description..."
                    // as="textarea"
                  />
                </FormStyled.InputWrapper>

                <FormStyled.InputCheckbox>
                  {' '}
                  <FormStyled.Label htmlFor="private">Private</FormStyled.Label>
                  <FormStyled.FieldCheckbox id="private" type="checkbox" name="toggle" />
                </FormStyled.InputCheckbox>
                <FormStyled.InputCheckbox>
                  {' '}
                  <FormStyled.Label htmlFor="completed">Completed</FormStyled.Label>
                  <FormStyled.FieldCheckbox id="completed" type="checkbox" name="completed" />
                </FormStyled.InputCheckbox>
                <FormStyled.BtnWrap>
                  {' '}
                  <FormStyled.Button type="submit">Edit Todo</FormStyled.Button>
                </FormStyled.BtnWrap>
              </Form>
            </Formik>
          </Styled.FormContainer>
        )}
      </Styled.EditWrapper>

      <Styled.BtnBack type="button" onClick={onClickGoBack}>
        Back
      </Styled.BtnBack>
    </div>
  );
};

export default TodoItem;
