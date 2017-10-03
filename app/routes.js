import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './components/About';
import PageNotFound from './components/page-not-found';
// import RequireAuth from './components/auth/require-auth';

export default (
	<Switch>
		<Route path="/" component={Home} />
		<Route path="/home" component={Login} />
		<Route path="*" component={PageNotFound} />
	</Switch>
);
