// import Libraries
import React from "react";
// import {Router, Route} from "react-router";
// import {Router, Route} from "react-router-dom";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
// import store and history
import configureStore from './store';
import EnsureLoggedInContainer from "./middleware/EnsureLoggedInContainer";
import {
    Root,
	Basic,
	Basic2,
} from './screens'
const { store, history } = configureStore();
// import Modules

// build the router
const router = (
	<Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
		<Route component={Root}>
		<Switch>
			{/* <Route path="/" component={Basic}/> */}
			<Route path="/basic" component={Basic}/>
			<Route path="/basic2" component={Basic2}/>
			<Route component={EnsureLoggedInContainer}/>
		</Switch>
		</Route>
	</Router>
);
// export Router
export {router};
