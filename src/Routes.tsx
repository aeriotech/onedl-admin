import { Switch, Route, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './components';
import { Main } from './layouts';
import { Home, Users, Shops, SignIn } from './pages';
import API from './api/api';

export default function Routes() {
  const isAuthenticated = API.getToken();

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
      <Redirect from="/" to={isAuthenticated ? '/dashboard' : '/sign-in'} />
    </Switch>
  );
}