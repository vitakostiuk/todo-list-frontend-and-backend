import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePageContainer from '../pages/homePage';
import TodoItemPageContainer from '../pages/todoItemPage';
import MainPage from '../pages/mainPage';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';
import { APP_KEYS } from '../common/consts';

export const MainRouter = () => (
  <Router>
    <Switch>
      {/* PUBLIC */}
      <Route component={MainPage} path={APP_KEYS.ROUTER_KEYS.ROOT} exact />
      <Route component={LoginPage} path={APP_KEYS.ROUTER_KEYS.LOGIN} exact />
      <Route component={RegisterPage} path={APP_KEYS.ROUTER_KEYS.REGISTER} exact />

      {/* PRIVATE */}
      <Route component={HomePageContainer} path={APP_KEYS.ROUTER_KEYS.HOME} />
      <Route component={TodoItemPageContainer} path={`${APP_KEYS.ROUTER_KEYS.HOME}:todoId`} />
    </Switch>
  </Router>
);
