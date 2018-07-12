export const ADD_SUCCESS_MSG = 'ADD_SUCCESS_MSG';
export const REMOVE_SUCCESS_MSG = 'REMOVE_SUCCESS_MSG';

export function addSucessMsg(value) {
  return {
    type: ADD_SUCCESS_MSG,
    value,
  };
}

export function removeSucessMsg() {
  return {
    type: REMOVE_SUCCESS_MSG,
  };
}

export const fetchSignUp = async (formData) => {
  const response = await fetch('/auth/signup', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  });
  return response;
};

export const fetchSignIn = async (formData) => {
  const response = await fetch('/auth/login', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  });
  return response;
};
