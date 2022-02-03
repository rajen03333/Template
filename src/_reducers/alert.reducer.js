import { alertConstants } from '../_constants';
const initialState = { isLoading: false, isModalOpen: false};
export function alert(state = initialState, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case alertConstants.LOADING:
      return {
        ...state,
        isLoading: true
      };
      case alertConstants.IS_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: !state.isModalOpen
      };
    case alertConstants.CLEAR_LOADING:
      return {
        isLoading: false
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}