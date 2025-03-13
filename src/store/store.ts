import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites-slice";
import bookReducer from "./books-slice";

const store = configureStore({
  reducer: {
    books: bookReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
