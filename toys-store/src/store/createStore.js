import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category";
import goodsReducer from "./goods";
import usersReducer from "./users";

const rootReducer = combineReducers({
  goods: goodsReducer,
  category: categoryReducer,
  users: usersReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
