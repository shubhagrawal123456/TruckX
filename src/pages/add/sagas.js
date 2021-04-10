import { put, takeEvery,call } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";
import * as userListActions from "../home/usersList/actions";
import * as service from "../../utils/services";
import {store} from "../../store";
import {push} from "react-router-redux";

function* addData(action) {
    const {first_name,last_name,email } = action.payload;
    try {
        yield put(actions.loading( true));
        // send post request to Api
        yield call(service.makePatchReq,{url:`/users`,data:{first_name,last_name,email}});
        // save data to redux store
        const state = store.getState();
        const getUserList = state.usersList.data;
        // const newID =uuid.v4();
        const newID = Date.now();
        const newUser = { id :newID,first_name,last_name,email};
        getUserList.unshift(newUser);
        yield put(userListActions.set(getUserList));
        store.dispatch(push("/"));
    } catch (error) {
        yield put(actions.failure(true,error.response.data.error));
        alert(error.response.data.error)
    }finally {
        yield put(actions.loading( false));
    }
}

export function* addDataSaga() {
    yield takeEvery(constants.SET, addData);
}
export default [addDataSaga()];

