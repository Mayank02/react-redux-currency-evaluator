import React from 'react';
import {Redirect} from 'react-router';

export default function Authentication(comp) {
    const authToken = localStorage.getItem('authToken');
    return authToken ? comp : <Redirect to="/"/>;
}
