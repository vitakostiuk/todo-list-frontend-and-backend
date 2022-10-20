import React from 'react';
import Header from '../common/components/header';
import TodoContainer from '../common/components/todoContainer';
import { TodoForm } from '../common/components/todoForm';

const HomePageContainer = () => (
  <>
    <Header />
    <TodoForm />
    <TodoContainer />
  </>
);

export default HomePageContainer;
