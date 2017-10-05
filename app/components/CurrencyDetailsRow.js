import PropTypes from 'prop-types';
import React from 'react';

const CurrencyDetailsRow = ({ keyIndex, data }) =>
    <tr key={keyIndex}>
        <td>{data.date}</td>
        <td>{data.high}</td>
        <td>{data.low}</td>
        <td>{data.volume}</td>
    </tr>;

CurrencyDetailsRow.propTypes = {
    data: PropTypes.object,
    keyIndex: PropTypes.string
};

export default CurrencyDetailsRow;
