import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';
import { useRegister } from '../../hooks/useRegister';
import Input from '../input';
import { IUser } from '../../types/user.types';
import * as Styled from '../todoForm/todoForm.styled';

interface MyFormValues {
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
  const initialValues: MyFormValues = { email: '', password: '', confirm: '' };

  const registerMutation = useRegister();
  console.log('registerMutation', registerMutation);

  const location: ILocation = useLocation();
  const [link] = useState(() => location?.state?.from);

  const history = useHistory();

  const onClickGoBack = () => {
    history.push(link);
  };

  const confirmPassword = (email: string, firstPassword: string, secondPassword: string) => {
    const credentials: IUser = {
      email,
      password: firstPassword
    };
    if (firstPassword === secondPassword) {
      registerMutation.mutate(credentials);
    } else {
      // eslint-disable-next-line no-alert
      alert('firstValue !== secondValue');
    }
    history.push('/login');
  };

  return (
    <Styled.Container>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          confirmPassword(values.email, values.password, values.confirm);
          // eslint-disable-next-line no-console
          console.log(values, actions);
        }}
      >
        <Form>
          <Input label="Email" name="email" />
          <Input label="Password" name="password" />
          <Input label="Confirm" name="confirm" />

          <Styled.BtnWrap>
            {' '}
            <Styled.Button type="submit">Submit</Styled.Button>
          </Styled.BtnWrap>
          <Styled.BtnWrap>
            {' '}
            <Styled.Button type="button" onClick={onClickGoBack}>
              Back
            </Styled.Button>
          </Styled.BtnWrap>
        </Form>
      </Formik>
    </Styled.Container>
  );
};

export default Register;
