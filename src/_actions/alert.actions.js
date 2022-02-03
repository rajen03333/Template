import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    clear,
    loading,
    clearLoading,
    modal
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}

function loading() {
    return { type: alertConstants.LOADING };
}
function modal() {
    return { type: alertConstants.IS_MODAL_OPEN };
}

function clearLoading() {
    return { type: alertConstants.CLEAR_LOADING };
}