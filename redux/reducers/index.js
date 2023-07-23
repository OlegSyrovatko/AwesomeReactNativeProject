import { combineReducers } from "@reduxjs/toolkit";
import valuesReducer from "./slice";

const rootReducer = combineReducers({
  values: valuesReducer,
});

export default rootReducer;
