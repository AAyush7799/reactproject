import { call, put } from "redux-saga/effects";
import Auth from "../api/auth";

import constants from "../constants";

export function* login(action) {
    console.log("INNN")
    yield put({
        type: constants("auth").reducers.login.loading
    });
    const response = yield call(Auth.login, action.payload);
    if(response.status === 200){
        yield put({
            type: constants("auth").reducers.login.success,
            payload: response.data,
        });
        // Redirect To pages according to Type......
        // return
        window.location.href = "/";
    }else{
        alert("Wrong email and password combination");
        yield put({
            type: constants("auth").reducers.login.error,
            payload: {
                status: response.status,
                message: "We ran into some issues and are looking into it."
            },
        });
        // alert(response.data.message);
    }
}
