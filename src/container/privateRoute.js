import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import { checkSession } from '../utils/cookies';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => (
        localStorage.getItem('user')
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )}
    />
);

export default PrivateRoute;
