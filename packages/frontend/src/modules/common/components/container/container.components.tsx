import React from 'react';
import { Div } from './container.styled';

interface IProps {
  children?: JSX.Element | JSX.Element[];
}

function Container({ children }: IProps) {
  return <Div>{children}</Div>;
}

export default Container;
