import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './main.styled';

interface ILocation {
  state: { pathname: string; search: string; hash: string; state: undefined };
}

const Main = () => {
  const location: ILocation = useLocation();

  return (
    <Styled.Container>
      <Styled.Title>Welcome To Your Todo App</Styled.Title>
      <Styled.StyleLink to={{ pathname: '/login', state: { from: location } }}>
        Login
      </Styled.StyleLink>
      <Styled.StyleLink to={{ pathname: '/register', state: { from: location } }}>
        Register
      </Styled.StyleLink>
    </Styled.Container>
  );
};

export default Main;
