import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/home/homeSlice";
import todoReducer from "./slices/todo/todoSlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
