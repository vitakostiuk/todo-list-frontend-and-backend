import React from 'react';
// import Grid from '@mui/material/Grid';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as Styled from './container.styled';

interface IProps {
  children?: JSX.Element | JSX.Element[];
}

function Container({ children }: IProps) {
  return <Styled.Div>{children}</Styled.Div>;
}

export default Container;

// const theme = createTheme({
//   breakpoints: {
//     keys: ['xs', 'sm', 'md'],
//     values: { xs: 0, sm: 320, md: 768, lg: 960, xl: 1200 }
//   }
// });

// function Container({ children }: IProps) {
//   return (
//     <ThemeProvider theme={theme}>
//       <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
//         {children}
//       </Grid>
//     </ThemeProvider>
//   );
// }
