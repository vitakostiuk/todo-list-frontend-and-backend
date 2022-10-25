import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useHistory, useLocation } from 'react-router-dom';
import Input from '../input';
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

const Login = () => {
  const initialValues: MyFormValues = { email: '', password: '' };

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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onSubmit={(values, actions) => {
          // console.log(values, actions);
        }}
      >
        <Form>
          <Input label="Email" name="email" />
          <Input label="Password" name="password" />

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

export default Login;
