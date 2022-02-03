import { userConstants } from "../_constants";
import { alertActions } from "./";
import {actions as toastr} from 'react-redux-toastr';
import {toastrutility,history} from '../_helpers';
export const userActions = {
  login,
  logout
};

function login(formdata) {
  return (dispatch) => {
    dispatch(alertActions.loading());
    dispatch(request());
   
    if(formdata.userId==="admin@admin.com" && formdata.password=== "admin" ){
      dispatch(success(formdata));
      dispatch(toastr.add({type: 'success',
        message: 'Login Success',
        options: toastrutility.options}));
        history.push("#/");
        
    }else{
      dispatch(toastr.add({type: 'error',
      message: 'Login failed',
      options: toastrutility.options}));
    dispatch(failure('Login failed'));
    }
    dispatch(alertActions.clearLoading());
  };

  function request() {
    return { type: userConstants.LOGIN_REQUEST };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}



function logout() {
  sessionStorage.removeItem('user');
  history.push("#/login");
  window.location.reload();
}

