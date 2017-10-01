import PropTypes from 'prop-types';
import React from 'react';
import CurrencyDetailsRow from './CurrencyDetailsRow';
import constants from '../utils/constant';

const CurrencyDetailsTable = ({ currencyDetailsList, threshold }) => {
    let tbodyRows = [];
    let noOfRows = 0;
    let theadtBodyRows = (<tr>
        <th><div>{constants.TIME}</div></th>
        <th><div>{constants.HIGH}</div></th>
        <th><div>{constants.LOW}</div></th>
        <th><div>{constants.VOLUME}</div></th>
    </tr>);

    currencyDetailsList.forEach((row, index) => {
        const highValue = row.high;
        noOfRows = 0;
        if (!isNaN(threshold) && highValue > parseFloat(threshold)) {
            tbodyRows.push(
                <CurrencyDetailsRow key={index} data={row} />
            );
            noOfRows ++;
        }
    });

    if(!(noOfRows > 0)) {
        tbodyRows.push(<tr><td>{threshold ? constants.EMPTY_TABLE_MSG : constants.NO_THRESHOLD_MSG}</td></tr>);
    }

    return <table><thead>{theadtBodyRows}</thead><tbody>{tbodyRows}</tbody></table>;
};

CurrencyDetailsTable.propTypes = {
    currencyDetailsList: PropTypes.array,
    threshold: PropTypes.string
};

export default CurrencyDetailsTable;
