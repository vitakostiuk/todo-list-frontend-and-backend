import React, { useState, useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { IUser } from '../../types/user.types';
import { useLogin } from '../../hooks/useLogin';
import * as Styled from '../register/register.styled';

interface IMyFormValues {
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
  const initialValues: IMyFormValues = { email: '', password: '' };

  const location: ILocation = useLocation();
  const [link] = useState(() => location?.state?.from);

  const loginMutation = useLogin();

  const { data } = loginMutation as IResponse;
  // console.log('loginMutation.data', loginMutation);

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
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Email is invalid').required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required')
        })}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSubmit={(values, actions) => {
          const credentials: IUser = {
            email: values.email,
            password: values.password
          };
          loginMutation.mutate(credentials);
          // eslint-disable-next-line no-alert, prefer-template
          // history.push('/');
          // console.log(values, actions);
        }}
      >
        {({ errors, touched, isValid, isSubmitting }) => (
          <Form>
            <Styled.Label htmlFor="email">
              Email
              <Styled.StyleField
                type="email"
                name="email"
                placeholder="your email"
                valid={touched.email && !errors.email}
                error={touched.email && errors.email}
              />
            </Styled.Label>
            <ErrorMessage name="email">
              {(msg) => <Styled.InlineErrorMessage>{msg}</Styled.InlineErrorMessage>}
            </ErrorMessage>

            <Styled.Label htmlFor="password">
              Password
              <Styled.StyleField
                type="password"
                name="password"
                placeholder="your password"
                valid={touched.password && !errors.password}
                error={touched.password && errors.password}
              />
            </Styled.Label>
            <ErrorMessage name="password">
              {(msg) => <Styled.InlineErrorMessage>{msg}</Styled.InlineErrorMessage>}
            </ErrorMessage>

            <Styled.BtnWrap>
              {' '}
              <Styled.Submit type="submit" disabled={!isValid || isSubmitting}>
                {' '}
                {isSubmitting ? 'Submiting...' : 'Submit'}
              </Styled.Submit>
            </Styled.BtnWrap>
            <Styled.BtnWrap>
              <Styled.Button type="button" onClick={onClickGoBack}>
                Back
              </Styled.Button>
            </Styled.BtnWrap>
            <Styled.BtnWrap>
              <Styled.Button type="button" onClick={() => history.push('/')}>
                GoToAccount
              </Styled.Button>
            </Styled.BtnWrap>
          </Form>
        )}
      </Formik>
    </Styled.Container>
  );
};

export default Login;
