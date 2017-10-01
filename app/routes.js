import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './components/About';

export default (
	<Switch>
		<Route exact path="/home" component={Login} />
		<Route exact path="/" component={Home} />
	</Switch>
);
