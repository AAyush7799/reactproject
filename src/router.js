// import Libraries
import React from "react";
import {Router, Route} from "react-router";
// import store and history
import configureStore from './store';
import EnsureLoggedInContainer from "./middleware/EnsureLoggedInContainer";
import {
    Root,
	Basic,
} from './screens'
const { store, history } = configureStore();
// import Modules

// build the router
const router = (
	<Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
		<Route component={Root}>
			<Route path="/" component={Basic}/>
			<Route path="/basic" component={Basic}/>
			<Route component={EnsureLoggedInContainer}>
		</Route>
		</Route>
	</Router>
);
// export Router
export {router};
