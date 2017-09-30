import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './containers/Home';
import home from './components/About';

export default (
	<Switch>
		<Route exact path="/" component={Login} />
		<Route path="/home" component={home} />
	</Switch>
);
