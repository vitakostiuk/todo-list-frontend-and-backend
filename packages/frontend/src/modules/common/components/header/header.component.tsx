import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>
    <NavLink exact to="/">
      Todolist
    </NavLink>
    <div>My Profile</div>
  </nav>
);

export default Header;
