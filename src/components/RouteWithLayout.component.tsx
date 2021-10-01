import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = (props: {
  [x: string]: any;
  layout: any;
  component: any;
}) => {
  const {
    layout: Layout,
    component: Component,
    isAuthenticated,
    ...rest
  } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) =>
        isAuthenticated ? (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
  isAuthenticated: PropTypes.bool,
};

export default RouteWithLayout;
