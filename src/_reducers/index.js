import { combineReducers } from 'redux';
import { reducer as toastr } from "react-redux-toastr";
import { alert } from './alert.reducer';
import {user} from './user.reducer';
import {changeState} from './changeState.reducer';

const rootReducer = combineReducers({
  alert,
  toastr,
  user,
  changeState
});

export default rootReducer;
