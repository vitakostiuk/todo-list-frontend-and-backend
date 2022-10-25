import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';
import Input from '../input';
import * as Styled from '../todoForm/todoForm.styled';

interface MyFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

interface ILocation {
  state: {
    from: { pathname: string; search: string; hash: string; state: undefined };
  };
}

const Register = () => {
  const initialValues: MyFormValues = { email: '', password: '', confirmPassword: '' };

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
        onSubmit={(values, actions) => {
          console.log(values, actions);
        }}
      >
        <Form>
          <Input label="Email" name="email" />
          <Input label="Password" name="password" />
          <Input label="Confirm password" name="confirm password" />

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
