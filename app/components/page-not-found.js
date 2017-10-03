import React, { Component } from 'react';
import constants from '../utils/constant';

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h1>{constants.NOT_FOUND_CODE}</h1>
                <p>{constants.PAGE_NOT_FOUND_MSG}</p>
            </div>
        );
    }
}
export default PageNotFound;
