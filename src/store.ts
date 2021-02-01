import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import  usageDataReducer  from "./slices/UsageDataSlice";

const reducer = combineReducers({
  usageData: usageDataReducer
});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;