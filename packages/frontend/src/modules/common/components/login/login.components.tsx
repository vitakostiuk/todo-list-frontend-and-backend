import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';
import Input from '../input';
import { IUser } from '../../types/user.types';
import { useLogin } from '../../hooks/useLogin';
import * as Styled from '../todoForm/todoForm.styled';

interface MyFormValues {
  email: string;
  password: string;
}

interface ILocation {
  state: {
    from: { pathname: string; search: string; hash: string; state: undefined };
  };
}

interface IResponse {
  data: {
    data: {
      token: string;
      user: {
        email: string;
        _id: string;
      };
    };
  };

  mutate: (data: IUser) => void;
}

const Login = () => {
  const initialValues: MyFormValues = { email: '', password: '' };

  const location: ILocation = useLocation();
  const [link] = useState(() => location?.state?.from);

  const loginMutation = useLogin();

  const { data } = loginMutation as IResponse;
  // console.log('loginMutation.data', data?.data?.token);

  useEffect(() => {
    if (data?.data?.token) {
      window.localStorage.setItem('token', JSON.stringify(data?.data?.token));
    }
  }, [loginMutation]);

  const history = useHistory();

  const onClickGoBack = () => {
    history.push(link);
  };

  return (
    <Styled.Container>
      <Formik
        initialValues={initialValues}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSubmit={(values, actions) => {
          const credentials: IUser = {
            email: values.email,
            password: values.password
          };
          loginMutation.mutate(credentials);
          // console.log(values, actions);
        }}
      >
        <Form>
          <Input label="Email" name="email" />
          <Input label="Password" name="password" />

          <Styled.BtnWrap>
            <Styled.Button type="submit">Summit</Styled.Button>
          </Styled.BtnWrap>

          <Styled.BtnWrap>
            <Styled.Button type="button" onClick={onClickGoBack}>
              Back
            </Styled.Button>
          </Styled.BtnWrap>
        </Form>
      </Formik>
    </Styled.Container>
  );
};

export default Login;
