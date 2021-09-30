import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routerProps) => {
        const user = JSON.parse(localStorage.getItem('media_user'));
        //if user does not exist on localstorage
        if (!user) {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: routerProps.location } }}
            />
          );
        }

        //check for user authority
        if (roles && roles.indexOf(user.role) === -1) {
          return <Redirect to={{ pathname: '/' }} />;
        }

        return <Component {...routerProps} {...rest} />;
      }}
    />
  );
};
