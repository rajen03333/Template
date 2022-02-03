import { userConstants } from '../_constants';
const initialState={isLogged:false};
export function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
          ...state,
          isLogged:true,
          user: action.user
      };
      case userConstants.LOGIN_FAILURE:
      return {
          ...state,
          isLogged:false,
          user: null
      };
      case userConstants.LOGIN_REQUEST:
      return {
          ...state,
          isLogged:false,
          user: null
      };
      case userConstants.LOGOUT:
      return {
          ...state,
          isLogged:false,
          user: null
      };
    default:
      return state
  }
}
