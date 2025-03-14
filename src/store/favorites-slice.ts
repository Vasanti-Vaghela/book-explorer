import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TBook } from "../Types";

interface TFavoriteBook extends TBook {
  notes?: string;
  tags?: string[];
}

interface TFavoritesState {
  favorites: TFavoriteBook[];
}

const initialState: TFavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<TFavoriteBook>) => {
      if (
        !state.favorites.find((book: TBook) => book.id === action.payload.id)
      ) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (book) => book.id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
