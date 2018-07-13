import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import paths from '../../constants/paths';


// const PrivateRoute = ({ component: Component, isUserAuthenticated, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     isUserAuthenticated === true
//       ? <Component {...props} />
//       : <Redirect to='/login' />
//   )} />
// )



// const PrivateRoute = ({ path, component, isUserAuthenticated }) => {
//   console.log(path);
//   return
//   <React.Fragment>
//     {isUserAuthenticated ?
//       <Route path={path} component={component} />
//       :
//       <Redirect to={{ pathname: '/', state: { from: "/login" } }} />
//     }
//   </React.Fragment>
// }





// class PrivateRoute extends React.Component {

//   componentDidMount = () => {
//     this.props.authCheck();
//   }

//   render() {
//     // this.props.authCheck();
//     console.log(this.props.isUserAuthenticated);
//     return (
//       <React.Fragment>
//         {this.props.isUserAuthenticated ?
//           <Route path={this.props.path} component={this.props.component} />
//           :
//           <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
//         }
//       </React.Fragment>
//     );
//   }
// }


class PrivateRoute extends React.Component {

  componentWillMount = () => {
    this.props.authCheck();
  }

  render() {
    // this.props.authCheck();
    // console.log(this.props.isUserAuthenticated);
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (
          this.props.isUserAuthenticated === true ? (
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
