import { put, takeEvery,call } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";
import * as service from "../../utils/services";
import {store} from "../../store";
import {push} from "react-router-redux";

export function* loginAttempt(action) {
    const {params } = action.payload;
    try {
        yield put(actions.loading(true));
        const response = yield call(service.makePostReq,{url:'/login',data:params});
        yield put(actions.set( response.data ));
        localStorage.setItem('authToken', JSON.stringify(response.data.token));
        store.dispatch(push("/"));
    } catch (error) {
        yield put(actions.failure(true,error.response.data.error));
        alert(error.response.data.error)
    }finally {
        yield put(actions.loading(false));
    }
}

export function* loginAttemptSaga() {
  yield takeEvery(constants.ATTEMPT, loginAttempt);
}
export default [loginAttemptSaga()];

