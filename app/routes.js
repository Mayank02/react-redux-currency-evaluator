import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import PageNotFound from './components/page-not-found';
import Authentication from './components/auth/require-auth';

export default (
	<Switch>
		<Route exact path="/" component={Login} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/home" render={ () => Authentication(<Home />)}/>
		<Route path="*" component={PageNotFound} />
	</Switch>
);
