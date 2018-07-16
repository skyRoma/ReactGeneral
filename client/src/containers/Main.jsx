import { connect } from 'react-redux';
import * as calcActions from '../actions/calculating';
import * as authActions from '../actions/auth';
import Main from '../components/Main/Main';

const mapDispatchToProps = dispatch => ({
  dropRemove: () => dispatch(calcActions.remove()),
  fetchData: () => dispatch(calcActions.fetchData()),
  authCheck: () => dispatch(authActions.authCheck()),
});

const mapStateToProps = state => ({
  counter: state.calcReducer.counter,
  isUserAuthenticated: state.authReducer.isUserAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
