import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/auth';
import App from '../components/App/App';

const mapDispatchToProps = dispatch => ({
  authCheck: () => dispatch(actions.authCheck()),
});

const mapStateToProps = state => ({
  isUserAuthenticated: state.authReducer.isUserAuthenticated,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


// export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);

// export default connect(mapStateToProps, mapDispatchToProps, null, {
//   pure: false,
// })(PrivateRoute);
