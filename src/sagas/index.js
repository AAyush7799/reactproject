// import Libraries
import { fork, takeLatest, takeEvery, all } from "redux-saga/effects";

import { login } from "./auth";

import constants from "../constants";


// main saga generators
export function* sagas(){
    yield all([
        yield takeEvery(constants("auth").sagas.login, login),
        
    ]);
}
