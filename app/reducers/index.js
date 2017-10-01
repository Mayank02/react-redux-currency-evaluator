import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

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

const isEmptyTable = (state = true, action) => {
    switch (action.type) {
        case types.EMPTY_TABLE:
            return action.isEmptyTable;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    threshold,
    currency,
    currencyDetailsList,
    isEmptyTable,
    routing
});

export default rootReducer;
