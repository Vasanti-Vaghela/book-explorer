import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TBook, TBookObject } from "../Types";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";

interface BooksState {
  books: TBook[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BooksState = {
  books: [],
  status: "idle",
  error: null,
};

// Thunk for fetching books from an API
export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (searchTerm: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}${searchTerm}`);
      if (!response.ok) throw new Error("Failed to fetch books");
      const data = await response.json();
      return data.items.map((item: TBookObject) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors || ["Unknown"],
        image: item.volumeInfo.imageLinks?.thumbnail || "",
        description: item.volumeInfo.description || "No description available.",
      }));
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    clearBooks: (state) => {
      state.books = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchBooks.fulfilled,
        (state, action: PayloadAction<TBook[]>) => {
          state.status = "succeeded";
          state.books = action.payload;
        }
      )
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { clearBooks } = bookSlice.actions;
export default bookSlice.reducer;
