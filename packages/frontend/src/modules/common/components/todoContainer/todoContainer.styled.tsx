import styled from 'styled-components';
import { APP_KEYS } from '../../consts';

export const Button = styled('button')`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 90px;
  height: 90px;
  background-color: #a3a2a2;
  color: ${APP_KEYS.COLORS_KEYS.WHITE};
  font-size: 20px;
  font-weight: 500;
  border-radius: 50%;
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);
  cursor: pointer;
  border: none;
  transition: transform 500ms;

  &:hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 110px;
    font-size: 23px;
  }
`;
