import styled from 'styled-components';
import { Field } from 'formik';

export const TodoTitle = styled('h2')`
  font-size: 25px;
  font-weight: 700;
  color: var(--text-color-black);
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const Title = styled('h3')`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-color-black);
`;

export const Describtion = styled('p')`
  display: block;
  word-wrap: break-word;
  font-size: 15px;
  font-weight: 700;
  color: var(--text-color-black);
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const StateWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  margin-bottom: 10px;
`;

export const TrueWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 50px;
  border: 1px solid #a3a2a2;
  border-radius: 25px;
  background-color: #34a56f;
`;

export const Toggle = styled('div')`
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 50%;
`;

export const FalseWrapper = styled('div')`
  display: flex;
  justify-content: flex-start;
  width: 50px;
  border: 1px solid #a3a2a2;
  border-radius: 25px;
  background-color: #a3a2a2;
`;

export const BtnEdit = styled('button')`
  width: 60px;
  height: 30px;
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
  margin-bottom: 200px;

  &:hover {
    transform: scale(1.03);
  }
`;

export const BtnBack = styled(BtnEdit)`
  width: 100px;
  background-color: var(--accent-color);
`;

export const EditWrapper = styled('div')`
  position: relative;
`;

export const FormContainer = styled('div')`
  position: absolute;
  top: 30px;
  left: 0;

  background-color: #ffffff;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  border-radius: 30px;
  padding: 20px;
`;

export const Textarea = styled(Field)`
  height: 100px;
  padding: 0;
`;
