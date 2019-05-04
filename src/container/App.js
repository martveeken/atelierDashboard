
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from '../components/Header';
import PrivateRoute from './privateRoute';
import LoginPage from '../components/Login/LoginPage';
import DashboardPage from '../components/DashboardPage';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Container>
          <Header />
        </Container>
        <Container>
          <Switch>
            <Route path="/" exact={true} component={LoginPage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
          </Switch>
        </Container>
      </Container>
    </BrowserRouter>
  );
};

export default App;
