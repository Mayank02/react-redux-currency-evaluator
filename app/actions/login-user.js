import 'whatwg-fetch';
import _ from 'lodash';
import constants from '../utils/constant';
import * as types from '../utils/action-types';
const headers = new Headers({ 'Content-Type': 'application/json' });

export function loginUser(credentials, history) {
    return (dispatch) => {
        fetch(`${process.env.API_URL}/auth/users.json`, {
            method: 'GET',
            headers
        }).then(response => response.json()).then((res) => {
            const loggedInUser = _.find(res.data, (user) => {
                return (user.email === credentials.email) && (user.password === credentials.password);
            });

            if(loggedInUser) {
                localStorage.setItem('authToken', loggedInUser.id);
                localStorage.setItem('userName', loggedInUser.name);
                dispatch({ type: types.SET_USER_DETAILS, payload: loggedInUser });
                dispatch({ type: types.AUTH_USER});
                history.push('/home');
            }else {
                localStorage.removeItem('authToken');
                localStorage.removeItem('userName');
                dispatch({ type: types.UNAUTH_USER});
                dispatch({ type: types.SET_VALIDATE_MESSAGE, payload: constants.LOGIN_FAILED_MSG });
            }
        });
    };
}

export function logoutUser() {
    return (dispatch) => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userName');
        dispatch({ type: types.UNAUTH_USER});
        dispatch({ type: types.SET_USER_DETAILS });
    };
}
