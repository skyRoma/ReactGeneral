import { combineReducers } from 'redux';
import calcReducer from './calcReducer';
import authReducer from './authReducer';

export default combineReducers({
  calcReducer,
  authReducer,
});
