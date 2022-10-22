import styled from 'styled-components';

export const Container = styled('div')`
  padding: 0 15px;
  /* border: 1px solid red; */

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0;
  }
`;

export const InputWrapper = styled('div')`
  /* border: 1px solid red; */

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Label = styled('label')`
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 700;
`;

export const Input = styled('input')`
  background-color: #fff;
  border: 1px solid var(--text-color-gray);
  color: var(--text-color-gray);
  border-radius: 4px;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  width: 160px;
  height: 30px;
  padding: 5px 10px;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px, rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid var(--accent-color);
    outline: none;
  }
`;

export const BtnList = styled('ul')`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    /* border: 1px solid red; */
  }
`;

export const Button = styled('button')`
  min-width: 30px;
  height: 30px;
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
  border: none;
  margin-top: 20px;

  &:hover {
    transform: scale(1.03);
  }

  &:not(:last-child) {
    border-right: 2px solid #fff;
  }
`;
