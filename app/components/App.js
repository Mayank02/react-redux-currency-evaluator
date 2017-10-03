import React from 'react';
import { Link } from 'react-router-dom';
import { header } from '../styles/header.scss';
import constants from '../utils/constant';
import Routes from '../routes';

const App = () =>
    <div className="content">
        <header className={header}>
            <Link to="/login">{constants.LOGIN}</Link>
        </header>
        { Routes }
    </div>;

export default App;
