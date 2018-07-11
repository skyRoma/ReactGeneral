import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from '../../modules/Auth';
import paths from '../../constants/paths';

class PrivateRoute extends React.Component {
  state = {
    authenticate: false,
  }

  componentDidMount = async () => {
    const response = await fetch('/api/counter', {
      method: 'GET',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        Authorization: `bearer ${Auth.getToken()}`,
      },
    });
    if (response.status === 200) {
      this.setState({
        authenticate: true,
      });
    } else {
      this.setState({
        authenticate: false,
      });
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (
          this.state.authenticate === true ? (
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
