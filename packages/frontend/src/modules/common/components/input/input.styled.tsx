import styled from 'styled-components';
import { Field } from 'formik';
import { APP_KEYS } from '../../consts';

export const InputWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Label = styled('label')`
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 700;
`;

export const StyleField = styled(Field)`
  background-color: ${APP_KEYS.COLORS_KEYS.WHITE};
  border: 1px solid ${APP_KEYS.COLORS_KEYS.GRAY};
  color: ${APP_KEYS.COLORS_KEYS.GRAY};
  border-radius: 4px;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  padding: 5px 10px;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px, rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid ${APP_KEYS.COLORS_KEYS.ACCENT};
    outline: none;
  }
`;

export const Textarea = styled(StyleField)`
  /* resize: none; */
  height: 100px;
`;
