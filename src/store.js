import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import UsersList from "./pages/home/usersList";
import Login from "./pages/login";
import Edit from "./pages/edit";
import Add from "./pages/add";
import { all } from "redux-saga/effects";
import history from "./utils/helpers/history";

const rootSaga = function*() {
  yield all([
    ...UsersList.sagas,
    ...Login.sagas,
    ...Edit.sagas,
    ...Add.sagas
  ]);

};
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return combineReducers({
    routing: routerReducer,
    usersList: UsersList.reducers,
    login: Login.reducers,
    edit: Edit.reducers,
    add: Add.reducers
  })(state, action);
};
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware,
        //logger,
        routerMiddleware(history)
    )
  )
);
sagaMiddleware.run(rootSaga);
export { store };
