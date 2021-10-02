import { Switch, Route, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main } from './layouts';
import { Home, Users, Shops, SignIn, Discounts } from './pages';
import API from './api/api';

export default function Routes() {
  const isAuthenticated: boolean = API.getToken() !== null;

  return (
    <Switch>
      <Route component={SignIn} exact path="/sign-in" />
      <RouteWithLayout
        component={Home}
        exact
        layout={Main}
        path="/dashboard"
        isAuthenticated={isAuthenticated}
      />
      <RouteWithLayout
        component={Users}
        exact
        layout={Main}
        path="/users"
        isAuthenticated={isAuthenticated}
      />
      <RouteWithLayout
        component={Shops}
        exact
        layout={Main}
        path="/shops"
        isAuthenticated={isAuthenticated}
      />
      <RouteWithLayout
        component={Discounts}
        exact
        layout={Main}
        path="/discounts"
        isAuthenticated={isAuthenticated}
      />
      <Redirect from="/" to={isAuthenticated ? '/dashboard' : '/sign-in'} />
    </Switch>
  );
}
