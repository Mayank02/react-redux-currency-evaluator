import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../utils/action-types';

const threshold = (state = '', action) => {
    switch (action.type) {
        case types.THRESHOLD:
            return action.threshold;
        default:
            return state;
    }
};

const currency = (state = '', action) => {
    switch (action.type) {
        case types.CURRENCY:
            return action.currency;
        default:
            return state;
    }
};

const currencyDetailsList = (state = [], action) => {
    switch (action.type) {
        case types.SET_CURRENCY_DETAILS:
            return action.currencyDetailsList;
        default:
            return state;
    }
};

const userDetails = (state = {}, action) => {
    switch (action.type) {
        case types.SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.userDetails
            };
        default:
            return state;
    }
};

const errorMessage = (state = {}, action) => {
    switch (action.type) {
        case types.SET_VALIDATE_MESSAGE:
            return {
                ...state,
                userDetails: null,
                validationError: action.payload
            };
        case types.RESET_VALIDATE_MESSAGE:
            return {
                ...state,
                userDetails: null,
                validationError: null
            };
        default:
            return state;
    }
};

const authenticated = (state = {}, action) => {
    switch (action.type) {
        case types.AUTH_USER:
            return {
                ...state,
                authenticated: true
            };
        case types.UNAUTH_USER:
            return {
                ...state,
                authenticated: false
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    threshold,
    currency,
    currencyDetailsList,
    userDetails,
    errorMessage,
    authenticated,
    routing
});

export default rootReducer;
