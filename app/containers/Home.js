import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterTable} from '../actions';
import CurrencyDetailsTable from '../components/CurrencyDetailsTable';
import constants from '../utils/constant';
import { bindActionCreators } from 'redux';
import * as types from '../utils/action-types';

let thresholdValue;
let selectedCurrency;

class Home extends Component {
    constructor(props) {
        super(props);
    }

    onCurrencyChange(currency) {
        this.props.actions.filterTable(currency);
    }

    render() {
        return (
            <div className="currency-wrapper">
                <div className="page_header row col-md-12 col-sm-12 col-xs-12">
                    <h4>{constants.CURRENCY_PAGE_HEADER}</h4>
                </div>
                <div className="filter row col-md-12 col-sm-12 col-xs-12">
                    <div className="currency-list form-group col-md-8 col-sm-8 col-xs-8">
                        <label className="col-md-6 col-sm-12 col-xs-12">{constants.SELECT_CURRENCY}</label>
                        <select className="form-control col-md-6 col-sm-12 col-xs-12" value={this.props.currency} ref={node => {selectedCurrency = node;}} onChange={() => this.onCurrencyChange(selectedCurrency.value)}>
                            <option value="LSK">LISK(LSK)</option>
                            <option value="ETH">Etherium(ETH)</option>
                            <option value="XMR">Monero(XMR)</option>
                            <option value="STRAT">Stratis(STRAT)</option>
                            <option value="BCH">Bitcoin Cash(BCH)</option>
                        </select>
                    </div>
                    <div className="threshold form-group col-md-4 col-sm-4 col-xs-4">
                        <label className="col-12">{constants.ENTER_THRESHOLD}</label>
                        <input
                        className="col-12 form-control"
                        value={this.props.threshold}
                        ref={node => {thresholdValue = node;}}
                        onChange={() => this.props.onFilter(thresholdValue.value)} />
                    </div>
                </div>
                <div className="currency-table row col-md-12 col-sm-12 col-xs-12">
                    {
                        this.props.currencyDetailsList.length ?
                        <CurrencyDetailsTable threshold={this.props.threshold} currencyDetailsList={this.props.currencyDetailsList}/> :
                        <div className="apply-filter-msg">{constants.APPLY_FILTER_MSG}</div>
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
    actions: React.PropTypes.object,
    onFilter: React.PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            filterTable
        }, dispatch),
        onFilter: threshold => {
            dispatch({type: types.THRESHOLD, threshold});
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
