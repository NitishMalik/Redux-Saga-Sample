import { combineReducers } from "redux";
import sagaReducer from "./sagaSample/sagaReducer";

const root = combineReducers({
  saga: sagaReducer
});

export default root;
