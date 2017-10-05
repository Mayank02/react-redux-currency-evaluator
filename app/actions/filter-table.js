import 'whatwg-fetch';
import * as types from '../utils/action-types';

export default function filterTable(currency) {
    return (dispatch) => {
        dispatch({type: types.CURRENCY, currency});
        const currentTime = Math.round(new Date().getTime() / 1000);
        const yesterdayTime = currentTime - (24 * 3600);
        const url = `${process.env.PUBLIC_URL}?command=returnChartData&currencyPair=BTC_${currency}&start=${yesterdayTime}&end=${currentTime}&period=300`;
        fetch(url, {
            method: 'GET',
        }).then(response => response.json()).then((data) => {
            dispatch({type: types.SET_CURRENCY_DETAILS, currencyDetailsList: data});
        });
    };
}
