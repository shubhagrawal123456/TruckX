import * as constants from "./constants";

export const get = ( query ) => ({
    type: constants.GET,
    payload: {
        query,
    },
});
export const set = ( data) => ({
    type: constants.SET,
    payload: {
        data : data,
    },
});
export const setTotal = ( data) => ({
    type: constants.SET_TOTAL,
    payload: {
        total_pages : data,
    },
});
export const setNextPage = ( data) => ({
    type: constants.SET_NEXT_PAGE,
    payload: {
        next_page : data,
    },
});
export const failure = (isFaild,msg) => ({
    type: constants.FAILURE,
    payload: {
        failure : isFaild,
        message :msg
    },
});
export const loading = ( isLoading) => ({
    type: constants.LOADING,
    payload: {
        loading: isLoading,
    },
});
export const deleteItem = ( id) => ({
    type: constants.DELETE_ITEM,
    payload: {
        id,
    },
});
export const deleteItemFailure = (isFaild,msg) => ({
    type: constants.DELETE_ITEM_FAILURE,
    payload: {
        delete_failure : isFaild,
        delete_message :msg
    },
});
export const deleteItemLoading = ( isLoading) => ({
    type: constants.DELETE_ITEM_LOADING,
    payload: {
        delete_loading: isLoading,
    },
});
