import styled from 'styled-components';

export const Div = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 320px;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  height: 100vh;

  @media screen and (min-width: 768px) {
    grid-template-columns: 768px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1280px;
    padding-left: 123px;
    padding-right: 123px;
  }
`;
