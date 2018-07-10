import * as actionTypes from '../actions/actions';

const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.INCREMENT:
    return {
      ...state,
      counter: state.counter + 1,
    };
  case actionTypes.DECREMENT:
    return {
      ...state,
      counter: state.counter - 1,
    };
  case actionTypes.ADD_VALUE:
    return {
      ...state,
      counter: state.counter + Number(action.value),
    };
  case actionTypes.SUBSTRACT_VALUE:
    return {
      ...state,
      counter: state.counter - Number(action.value),
    };
  case actionTypes.REMOVE:
    return {
      ...state,
      counter: 0,
    };
  case actionTypes.RECEIVE:
    return {
      ...state,
      counter: action.value,
    };
  default:
    return state;
  }
};

export default rootReducer;
