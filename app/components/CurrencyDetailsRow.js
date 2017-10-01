import PropTypes from 'prop-types';
import React from 'react';

const CurrencyDetailsRow = ({ data }) =>
    <tr>
        <td>{data.date}</td>
        <td>{data.high}</td>
        <td>{data.low}</td>
        <td>{data.volume}</td>
    </tr>;

CurrencyDetailsRow.propTypes = {
    data: PropTypes.object
};

export default CurrencyDetailsRow;
