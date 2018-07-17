import Auth from '../services/Auth';

class Api {
  static setData = async (data) => {
    const response = await fetch('/api/set-counter', {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        Authorization: `bearer ${Auth.getToken()}`,
      },
      body: `counter=${data}`,
    });
    return response;
  }
}

export default Api;
