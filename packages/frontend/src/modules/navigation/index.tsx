import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePageContainer from '../pages/homePage';
import TodoItemPageContainer from '../pages/todoItemPage';
import MainPage from '../pages/mainPage';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';
import { APP_KEYS } from '../common/consts';

export const MainRouter = () => {
  const isLoggedIn = window.localStorage.getItem('token');
  // console.log('isLoggedIn', isLoggedIn);
  return (
    <Router>
      <Switch>
        {/* PUBLIC */}
        <Route path={APP_KEYS.ROUTER_KEYS.ROOT} exact>
          {!isLoggedIn ? <MainPage /> : <Redirect to={APP_KEYS.ROUTER_KEYS.HOME} />}
        </Route>
        <Route path={APP_KEYS.ROUTER_KEYS.LOGIN} exact>
          {!isLoggedIn ? <LoginPage /> : <Redirect to={APP_KEYS.ROUTER_KEYS.HOME} />}
        </Route>
        <Route path={APP_KEYS.ROUTER_KEYS.REGISTER} exact>
          {!isLoggedIn ? <RegisterPage /> : <Redirect to={APP_KEYS.ROUTER_KEYS.HOME} />}
        </Route>

        {/* PRIVATE */}
        <Route path={APP_KEYS.ROUTER_KEYS.HOME}>
          {isLoggedIn ? <HomePageContainer /> : <Redirect to={APP_KEYS.ROUTER_KEYS.ROOT} />}
        </Route>
        <Route path={`${APP_KEYS.ROUTER_KEYS.HOME}:todoId`}>
          {!isLoggedIn ? <Redirect to={APP_KEYS.ROUTER_KEYS.ROOT} /> : <TodoItemPageContainer />}
        </Route>
      </Switch>
    </Router>
  );
};
