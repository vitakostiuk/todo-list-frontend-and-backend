import React from 'react';
import * as Styled from './header.styled';

const Header = () => (
  <Styled.MenuUl>
    <Styled.StyleNavLink exact to="/">
      Todolist
    </Styled.StyleNavLink>
    <Styled.StyleNavLink exact to="/">
      My Profile
    </Styled.StyleNavLink>
  </Styled.MenuUl>
);

export default Header;
