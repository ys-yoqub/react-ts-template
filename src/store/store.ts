import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home/homeSlice";
import todoReducer from "./modules/todo/todoSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
