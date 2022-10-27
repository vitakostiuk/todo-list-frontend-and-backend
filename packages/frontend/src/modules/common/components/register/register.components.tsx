import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { useRegister } from '../../hooks/useRegister';
import { IUser } from '../../types/user.types';
import * as Styled from './register.styled';

interface IMyFormValues {
  email: string;
  password: string;
  confirm: string;
}

interface ILocation {
  state: {
    from: { pathname: string; search: string; hash: string; state: undefined };
  };
}

const Register = () => {
  const initialValues: IMyFormValues = { email: '', password: '', confirm: '' };

  const registerMutation = useRegister();
  // console.log('registerMutation', registerMutation);

  const location: ILocation = useLocation();
  const [link] = useState(() => location?.state?.from);

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
            .required('Password is required'),
          confirm: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
        })}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSubmit={(values, actions) => {
          const credentials: IUser = {
            email: values.email,
            password: values.password
          };
          registerMutation.mutate(credentials);
          // eslint-disable-next-line no-alert, prefer-template
          alert('Registration was successful. Log in to enter your account!');
          history.push('/login');
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

            <Styled.Label htmlFor="confirm">
              Confirm
              <Styled.StyleField
                type="password"
                name="confirm"
                placeholder="your confirm password"
                valid={touched.password && !errors.password}
                error={touched.password && errors.password}
              />
            </Styled.Label>
            <ErrorMessage name="confirm">
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
              {' '}
              <Styled.Button type="button" onClick={onClickGoBack}>
                Back
              </Styled.Button>
            </Styled.BtnWrap>
          </Form>
        )}
      </Formik>
    </Styled.Container>
  );
};

export default Register;

// (
//   <Styled.Container>
//     <Formik
//       initialValues={initialValues}
//       onSubmit={(values, actions) => {
//         confirmPassword(values.email, values.password, values.confirm);
//         // eslint-disable-next-line no-console
//         console.log(values, actions);
//       }}
//     >
//       <Form>
//         <Input label="Email" name="email" />
//         <Input label="Password" name="password" />
//         <Input label="Confirm" name="confirm" />

// <Styled.BtnWrap>
//   {' '}
//   <Styled.Button type="submit">Submit</Styled.Button>
// </Styled.BtnWrap>
// <Styled.BtnWrap>
//   {' '}
//   <Styled.Button type="button" onClick={onClickGoBack}>
//     Back
//   </Styled.Button>
// </Styled.BtnWrap>
//       </Form>
//     </Formik>
//   </Styled.Container>
// );
