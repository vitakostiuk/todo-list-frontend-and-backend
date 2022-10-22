import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuUl = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 15px;
  list-style: none;

  @media screen and (min-width: 768px) {
    padding-left: 26px;
    padding-right: 26px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 26px;
    padding-right: 26px;
  }
`;

export const StyleNavLink = styled(NavLink)`
  width: 100px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: var(--accent-color);
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 3px;
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);
  text-decoration: none;
  transition: transform 500ms;

  &:visited {
    color: #ffffff;
  }

  &:hover {
    transform: scale(1.03);
  }
`;
