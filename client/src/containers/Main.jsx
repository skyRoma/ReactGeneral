import { connect } from 'react-redux';
import * as actions from '.././actions/actions';
import Main from '../components/Main/Main';

const mapDispatchToProps = dispatch => ({
  dropRemove: () => dispatch(actions.remove()),
  fetchData: () => dispatch(actions.fetchData()),
});

const mapStateToProps = state => ({
  counter: state.counter,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
