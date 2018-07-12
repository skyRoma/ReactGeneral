import * as actionTypes from '../actions/auth';

const initialState = {
  successMessage: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.ADD_SUCCESS_MSG:
    return {
      ...state,
      successMessage: action.value,
    };
  case actionTypes.REMOVE_SUCCESS_MSG:
    return {
      ...state,
      successMessage: '',
    };
  default:
    return state;
  }
};

export default authReducer;
