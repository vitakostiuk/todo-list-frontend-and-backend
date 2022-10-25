import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { APP_KEYS } from '../../consts';

export const MenuUl = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${APP_KEYS.COLORS_KEYS.WHITE};
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
  justify-self: start;
  width: 100px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${APP_KEYS.COLORS_KEYS.ACCENT};
  color: ${APP_KEYS.COLORS_KEYS.WHITE};
  font-size: 15px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 3px;
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);
  text-decoration: none;
  transition: transform 500ms;

  &:visited {
    color: ${APP_KEYS.COLORS_KEYS.WHITE};
  }

  &:hover {
    transform: scale(1.03);
  }

  &:last-child {
    justify-self: end;
  }
`;
