import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/rootReducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
