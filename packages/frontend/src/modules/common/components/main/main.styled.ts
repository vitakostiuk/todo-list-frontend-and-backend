import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SPACES, COLORS, FONTS } from '../../../theme';

export const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
`;

export const StyleLink = styled(Link)`
  justify-self: start;
  width: 80px;
  height: 30px;
  margin-top: ${SPACES.xxl};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${COLORS.ACCENT};
  color: ${COLORS.WHITE};
  font-size: ${FONTS.FONT_SIZES.m};
  font-weight: ${FONTS.WEIGHTS.normal};
  padding: ${SPACES.xxs} ${SPACES.xs};
  border-radius: 3px;
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);
  text-decoration: none;
  transition: transform 500ms;

  &:visited {
    color: ${COLORS.WHITE};
  }

  &:hover {
    transform: scale(1.03);
  }

  &:last-child {
    justify-self: end;
  }
`;

export const Title = styled('h1')`
  display: block;
  text-align: center;
`;
