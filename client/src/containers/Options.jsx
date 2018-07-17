import { connect } from 'react-redux';
import * as actions from '.././actions/calculating';
import Options from '../components/Options/Options';

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(actions.increment()),
  decrement: () => dispatch(actions.decrement()),
  add: value => dispatch(actions.addValue(value)),
  substract: value => dispatch(actions.substractValue(value)),
});

export default connect(null, mapDispatchToProps)(Options);
