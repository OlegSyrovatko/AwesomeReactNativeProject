import { combineReducers } from "@reduxjs/toolkit";
import valuesReducer from "./Slice";

const rootReducer = combineReducers({
  values: valuesReducer,
});

export default rootReducer;
