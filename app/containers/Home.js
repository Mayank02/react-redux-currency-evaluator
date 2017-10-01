import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { filterTable} from '../actions';
import CurrencyDetailsTable from '../components/CurrencyDetailsTable';
import { home } from '../styles/home.scss';
import constants from '../utils/constant';
import * as types from '../actions/types';

const Home = ({ threshold, currency, currencyDetailsList, onFilter, onCurrencyChange }) => {
    let thresholdValue;
    let selectedCurrency;

    return (
        <div className={home}>
            <div className="filter row col-md-12 col-sm-12 col-xs-12">
                <div className="currency-list col-md-6 col-sm-6 col-xs-6">
                <label>{constants.SELECT_CURRENCY}</label>
                    <select value={currency} ref={node => {selectedCurrency = node;}} onChange={() => onCurrencyChange(selectedCurrency.value)}>
                        <option value="LSK">LISK(LSK)</option>
                        <option value="ETH">Etherium(ETH)</option>
                        <option value="XMR">Monero(XMR)</option>
                        <option value="STRAT">Stratis(STRAT)</option>
                        <option value="BCH">Bitcoin Cash(BCH)</option>
                    </select>
                </div>
                <div className="threshold col-md-6 col-sm-6 col-xs-6">
                    <label>{constants.ENTER_THRESHOLD}</label>
                    <input
                    value={threshold}
                    ref={node => {thresholdValue = node;}}
                    onChange={() => onFilter(thresholdValue.value)} />
                </div>
            </div>
            <div className="filter row col-md-12 col-sm-12 col-xs-12">
                {
                    currencyDetailsList.length ?
                    <CurrencyDetailsTable threshold={threshold} currencyDetailsList={currencyDetailsList}/> :
                    <div>No Data </div>
                }
            </div>
        </div>
    );
};

Home.propTypes = {
    threshold: PropTypes.string,
    currency: PropTypes.string,
    currencyDetailsList: PropTypes.array,
    isEmptyTable: PropTypes.bool,
    onFilter: PropTypes.func,
    onCurrencyChange: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        threshold: state.threshold,
        currency: state.currency,
        isEmptyTable: state.isEmptyTable,
        currencyDetailsList: state.currencyDetailsList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: threshold => {
            dispatch({type: types.THRESHOLD, threshold});
        },
        onCurrencyChange: currency => {
            dispatch({type: types.CURRENCY, currency});
            filterTable(currency, (data)=> {
                dispatch({type: types.SET_CURRENCY_DETAILS, currencyDetailsList: data});
            });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
