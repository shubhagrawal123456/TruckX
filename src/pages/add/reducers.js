import * as constants from "./constants";
const initial ={
    failure:false,
    loading:false,
}
function addReducer(state = initial, action) {
  switch (action.type) {
      case constants.FAILURE:
        return { ...state, ...action.payload };
      case constants.LOADING:
          return { ...state, ...action.payload };
    default:
      return state;
  }
}
export default addReducer;
