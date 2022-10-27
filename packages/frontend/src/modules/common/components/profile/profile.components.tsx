import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { IUser } from '../../types/user.types';
// import { useLogin } from '../../hooks/useLogin';
import { useChangePassword } from '../../hooks/useChangePassword';
// import { useLogout } from '../../hooks/useLogout';
import * as Styled from '../register/register.styled';

interface IMyFormValues {
  email: string;
  password: string;
  newPassword: string;
}

interface ILocation {
  state: {
    from: { pathname: string; search: string; hash: string; state: undefined };
  };
}

// interface IResponse {
//   data: {
//     data: {
//       token: string;
//       user: {
//         email: string;
//         _id: string;
//       };
//     };
//   };
//   mutate: (data: IUser) => void;
// }

const Profile = () => {
  const [isClickLogout, setIsClickLogout] = useState(false);
  const initialValues: IMyFormValues = { email: '', password: '', newPassword: '' };

  const location: ILocation = useLocation();
  const [link] = useState(() => location?.state?.from);

  const changePasswordMutation = useChangePassword();
  // console.log('changePasswordMutation', changePasswordMutation);

  const history = useHistory();

  const onClickGoBack = () => {
    history.push(link);
  };

  const onClickLogout = () => {
    setIsClickLogout((prevState) => !prevState);

    if (isClickLogout) {
      // const queryLogout = useLogout();
      // console.log('queryLogout', queryLogout);
      window.localStorage.setItem('token', '');
    }
  };

  return (
    <Styled.Container>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Email is invalid').required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
          newPassword: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required')
        })}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSubmit={(values, actions) => {
          const credentials: IUser = {
            email: values.email,
            password: values.password,
            newPassword: values.newPassword
          };
          changePasswordMutation.mutate(credentials);
          // eslint-disable-next-line no-alert, prefer-template
          // history.push('/home');
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

            <Styled.Label htmlFor="newPassword">
              New Password
              <Styled.StyleField
                type="password"
                name="newPassword"
                placeholder="your password"
                valid={touched.password && !errors.password}
                error={touched.password && errors.password}
              />
            </Styled.Label>
            <ErrorMessage name="newPassword">
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
          </Form>
        )}
      </Formik>
      <Styled.BtnWrap>
        <Styled.Button type="button" onClick={onClickLogout}>
          Logout
        </Styled.Button>
      </Styled.BtnWrap>
    </Styled.Container>
  );
};

export default Profile;
