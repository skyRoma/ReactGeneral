import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import paths from '../../constants/paths';

class PrivateRoute extends React.Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (
          true === true ? (
            <Component {...props} />
          ) : (
            <Redirect to={{
              pathname: paths.login,
              state: { from: props.location },
            }}
            />
          )
        )}
      />
    );
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
