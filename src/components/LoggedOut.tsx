import React, { FunctionComponent } from 'react';
import { Link, RouteNode } from 'react-router5';
import { State } from 'router5';
import { LoggedOutHeader } from './LoggedOutHeader';
import { Login } from '../pages/Login';

interface Props {
  route: State
}

const LoggedOutComponent: FunctionComponent<Props> = ({ route }) => {
  console.log(route);

  if (!route) {
    return (
      <div className="container">
        <Link routeName="login">Log in</Link>
      </div>
    );
  }

  if (route.name === 'login') {
    return (
      <Login />
    )
  }

  const loginParams = {
    return_to: route.path,
  };
  return (
    <div className="container">
      <Link routeName="login" routeParams={loginParams}>Log in</Link>
    </div>
  );
}

export const LoggedOut: FunctionComponent = () => (
  <RouteNode nodeName="">
    {({ route }) => (
      <React.Fragment>
        <LoggedOutHeader />
        <LoggedOutComponent route={route} />
      </React.Fragment>
    )}
  </RouteNode>
)