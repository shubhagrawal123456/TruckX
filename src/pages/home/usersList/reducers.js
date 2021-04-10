import * as constants from "./constants";
const initial ={
    data:[],
    failure:false,
    loading:false,
    delete_failure:false,
    delete_loading:false,
    next_page:1,
    total_pages:1
}
function userListReducer(state = initial, action) {
    switch (action.type) {
        case constants.SET:
            return { ...state, ...action.payload };
        case constants.SET_NEXT_PAGE:
            return { ...state, ...action.payload };
        case constants.SET_TOTAL:
            return { ...state, ...action.payload };
        case constants.FAILURE:
            return { ...state, ...action.payload };
        case constants.LOADING:
            return { ...state, ...action.payload };
        case constants.DELETE_ITEM_FAILURE:
            return { ...state, ...action.payload };
        case constants.DELETE_ITEM_LOADING:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
export default userListReducer;
