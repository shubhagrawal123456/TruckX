import { put, takeEvery,call } from "redux-saga/effects";
import * as actions from "./actions";
import * as constants from "./constants";
import * as service from "../../../utils/services";
import {store} from "../../../store";

function* getData(action) {
    const { query } = action.payload;
    try {
        yield put(actions.loading( true));
        const response = yield call(service.makeGetReq,`/users?delay=2${query}`);
        const state = store.getState();
        const getWholeItems = state.usersList.data;
        const finalData = yield [...getWholeItems, ...response.data.data];
        yield put(actions.set( finalData));
        yield put(actions.setTotal( response.data.total_pages));
        yield put(actions.setNextPage( parseInt(response.data.page)+1));
    } catch (error) {
        yield put(actions.failure(true,error.response.data.error));
    }finally {
        yield put(actions.loading( false));
    }
}
function* deleteData(action) {
    const { id } = action.payload;
    try {
        yield put(actions.deleteItemLoading( true));
        // send delete request to Api
        yield call(service.makeDeleteReq,`/users/${id}` );
        const state = store.getState();
        const getUserList = state.usersList.data;
        // delete from redux store
        const result = getUserList.filter(user => user.id !== id);
        yield put(actions.set(result));
    } catch (error) {
        yield put(actions.deleteItemFailure(true,error.response.data.error));
    }finally {
        yield put(actions.deleteItemLoading( false));
    }
}

export function* getDataSaga() {
    yield takeEvery(constants.GET, getData);
}
export function* deleteDataSaga() {
    yield takeEvery(constants.DELETE_ITEM, deleteData);
}
export default [getDataSaga(),deleteDataSaga()];

