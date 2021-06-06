import {createStore, applyMiddleware} from "redux";
import {browserHistory} from "react-router";
import {createLogger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { persistStore, persistReducer } from "redux-persist";

import {syncHistoryWithStore, routerMiddleware} from "react-router-redux";

import storage from 'redux-persist/lib/storage';
// import all Reducers
import {reducers} from "./reducers";

// import all Sagas
import { sagas as rootSaga } from "./sagas";
const persistConfig = {
  key: 'root',
  storage,
  timeout: 10000,
  // blacklist: ['routing'],
  whitelist : ['auth',],
};

const initialState = {};

const persistedReducers = persistReducer(persistConfig, reducers);

// define middlewares
let middlewares = [];

// create and add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

//add the freeze and logger dev middleware
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
}

// apply the middleware
const middleware = applyMiddleware(...middlewares);



export default () => {
  const store = createStore(persistedReducers, undefined, middleware);
  const persistor = persistStore(store);
  const history = syncHistoryWithStore(browserHistory, store);
  sagaMiddleware.run(rootSaga);
  return { store, history, persistor }
}