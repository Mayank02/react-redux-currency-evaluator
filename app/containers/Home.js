import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterTable} from '../actions';
import CurrencyDetailsTable from '../components/CurrencyDetailsTable';
import { home } from '../styles/home.scss';
import constants from '../utils/constant';
import * as types from '../utils/action-types';

let thresholdValue;
let selectedCurrency;

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={home}>
                <div className="filter row col-md-12 col-sm-12 col-xs-12">
                    <div className="currency-list col-md-6 col-sm-6 col-xs-6">
                    <label>{constants.SELECT_CURRENCY}</label>
                        <select value={this.props.currency} ref={node => {selectedCurrency = node;}} onChange={() => this.props.onCurrencyChange(selectedCurrency.value)}>
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
                        value={this.props.threshold}
                        ref={node => {thresholdValue = node;}}
                        onChange={() => this.props.onFilter(thresholdValue.value)} />
                    </div>
                </div>
                <div className="filter row col-md-12 col-sm-12 col-xs-12">
                    {
                        this.props.currencyDetailsList.length ?
                        <CurrencyDetailsTable threshold={this.props.threshold} currencyDetailsList={this.props.currencyDetailsList}/> :
                        <div>No Data </div>
                    }
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    threshold: React.PropTypes.string,
    currency: React.PropTypes.string,
    currencyDetailsList: React.PropTypes.array,
    onFilter: React.PropTypes.func,
    onCurrencyChange: React.PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        ...state
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
