import { connect } from 'react-redux';
import * as actions from '.././actions/actions';
import AuthWindow from '../components/AuthWindow/AuthWindow';

const mapDispatchToProps = dispatch => ({
  addSucessMsg: value => dispatch(actions.addSucessMsg(value)),
  removeSucessMsg: () => dispatch(actions.removeSucessMsg()),
});

const mapStateToProps = state => ({
  successMessage: state.successMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthWindow);

