import * as types from '../utils/action-types';

export default function resetMessage() {
    return (dispatch) => {
        dispatch({ type: types.RESET_VALIDATE_MESSAGE });
    };
}
