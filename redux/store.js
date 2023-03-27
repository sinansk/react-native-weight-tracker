import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userInfoSlice from "./userInfoSlice";


const combinedReducer = combineReducers({
  userInfo: userInfoSlice,
});

const rootReducer = (state, action) => {
  if (action.type === "userInfo/reset") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

// const rootReducer = combineReducers({ userInfo: userInfoSlice });


export const store = configureStore({
  reducer: rootReducer,

});


