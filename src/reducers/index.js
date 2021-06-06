// import Libraries
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import auth from './auth';

// export global combined reducer
export const reducers = combineReducers ({
        routing: routerReducer,
        auth: auth,
    })
;
