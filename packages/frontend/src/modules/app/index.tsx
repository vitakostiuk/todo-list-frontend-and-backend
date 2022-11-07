import React from 'react';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { MainRouter } from '../navigation';
import 'react-toastify/dist/ReactToastify.css';

import * as theme from '../theme';
import * as Styled from './app.styled';
import '../../style.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      cacheTime: Infinity
    }
  }
});

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <Styled.GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <MainRouter />
      <ToastContainer position="top-right" autoClose={3000} limit={1} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ThemeProvider>
);

export default AppContainer;
