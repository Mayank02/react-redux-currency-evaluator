import 'whatwg-fetch';

import createHistory from 'history/createBrowserHistory';
import constants from '../utils/constant';
import * as types from '../utils/action-types';

const history = createHistory({ basename: '/', forceRefresh: true });
const headers = new Headers({ 'Content-Type': 'application/json' });

export function loginUser(credentials) {
    console.log(credentials);
    return (dispatch) => {
        fetch(`${process.env.API_URL}/auth/users.json`, {
            method: 'GET',
            headers
        }).then(response => response.json()).then((data) => {
            if(data.id) {
                localStorage.setItem('authToken', data.id);
                dispatch({ type: types.SET_USER_DETAILS, payload: data });
                dispatch({ type: types.AUTH_USER});
                history.push('/home');
            }else {
                dispatch({ type: types.UNAUTH_USER});
                dispatch({ type: types.SET_VALIDATE_MESSAGE, payload: constants.LOGIN_FAILED_MSG });
            }
        });
    };
}

export function logoutUser() {
    return (dispatch) => {
        localStorage.removeItem('authToken');
        dispatch({ type: types.SET_USER_DETAILS });
        history.push('/');
    };
}
