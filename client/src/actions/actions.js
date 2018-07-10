export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_VALUE = 'ADD_VALUE';
export const SUBSTRACT_VALUE = 'SUBSTRACT_VALUE';
export const REMOVE = 'REMOVE';
export const RECEIVE = 'RECEIVE';

export function increment() {
  return {
    type: INCREMENT,
  };
}
export function decrement() {
  return {
    type: DECREMENT,
  };
}
export function addValue(value) {
  return {
    type: ADD_VALUE,
    value,
  };
}
export function substractValue(value) {
  return {
    type: SUBSTRACT_VALUE,
    value,
  };
}
export function remove() {
  return {
    type: REMOVE,
  };
}

export function receiveData(value) {
  return {
    type: RECEIVE,
    value,
  };
}

const callApi = async () => {
  const response = await fetch('/api/counter');
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
};

export function fetchData() {
  return function (dispatch) {
    callApi()
      .then(res => dispatch(receiveData(res.data)))
      .catch(console.error);
  };
}
