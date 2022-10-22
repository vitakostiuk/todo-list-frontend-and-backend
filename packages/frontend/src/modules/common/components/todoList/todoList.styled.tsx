import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled('ul')`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled('li')`
  /* border: 1px solid red; */
`;

export const Title = styled('h2')`
  font-size: 15px;
  font-weight: 700;
  color: var(--text-color-black);
  margin-bottom: 5px;
  margin-top: 20px;
`;

export const Describtion = styled('p')`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-color-black);
  margin-bottom: 5px;
`;

export const BtnWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled('button')`
  width: 100px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #a3a2a2;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 3px;
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);
  text-decoration: none;
  transition: transform 500ms;
  border: none;

  &:hover {
    transform: scale(1.03);
  }
`;

export const StyleLink = styled(Link)`
  width: 100px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #a3a2a2;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 3px;
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);
  text-decoration: none;
  transition: transform 500ms;
  border: none;

  &:hover {
    transform: scale(1.03);
  }
`;

export const PrivateWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 50px;
  border: 1px solid #a3a2a2;
  border-radius: 25px;
  background-color: #34a56f;
`;

export const PrivateToggle = styled('div')`
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 50%;
`;

export const PublicWrapper = styled('div')`
  display: flex;
  justify-content: flex-start;
  width: 50px;
  border: 1px solid #a3a2a2;
  border-radius: 25px;
  background-color: #a3a2a2;
`;
