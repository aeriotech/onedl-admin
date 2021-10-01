import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main } from './layouts';
import { Home, Users } from './pages';

export default function Routes() {
  return (
    <Switch>
      <RouteWithLayout component={Home} exact layout={Main} path="/" />
      <RouteWithLayout component={Users} exact layout={Main} path="/users" />
    </Switch>
  );
}
