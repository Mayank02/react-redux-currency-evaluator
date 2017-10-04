import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import App from '../components/App';
import * as types from '../utils/action-types';

export default function Root({store, history}) {
    const userAuthDetails = localStorage.getItem('authToken');
    if(userAuthDetails) {
        store.dispatch({ type: types.AUTH_USER });
    }

    return (
        <Provider store={store}>
            <div className="container">
                <ConnectedRouter history={history}>
                    <Route path="/" component={App}/>
                </ConnectedRouter>
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object
};
