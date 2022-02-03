import { config, Utils } from '../_helpers';


const { handleError, handleResponse } = Utils;

export const userService = {
  login,
  logout
};

function login(formdata) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formdata)
  };

  return fetch(config.apiUrl + '/login', requestOptions)
    .then(handleResponse)
    .catch(handleError);
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}
