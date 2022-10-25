import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePageContainer from '../pages/homePage';
import TodoItemPageContainer from '../pages/todoItemPage';
import { APP_KEYS } from '../common/consts';

export const MainRouter = () => (
  <Router>
    <Switch>
      <Route component={HomePageContainer} path={APP_KEYS.ROUTER_KEYS.ROOT} exact />
      <Route component={TodoItemPageContainer} path={`${APP_KEYS.ROUTER_KEYS.ROOT}:todoId`} />
    </Switch>
  </Router>
);
