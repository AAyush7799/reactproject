import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store';
import { router } from "./router";
import "babel-polyfill";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const { store, persistor } = configureStore();
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  	<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {router}
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import "babel-polyfill";
// import React from "react";
// import ReactDOM from "react-dom";
// import {Provider} from "react-redux";
// import { PersistGate } from 'redux-persist/integration/react'
// import configureStore from './store';
// import { router } from "./router";

// const { store, persistor } = configureStore();
// ReactDOM.render(
// 	<Provider store={store}>
// 		<PersistGate loading={null} persistor={persistor}>
// 			{router}
// 		</PersistGate>
// 	</Provider>,
// 	document.getElementById("my_app")
// );