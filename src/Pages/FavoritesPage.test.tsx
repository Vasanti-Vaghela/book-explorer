import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import favoritesReducer, {
  addFavorite,
  removeFavorite,
} from "../store/favorites-slice";
import FavoritesPage from "./FavoritesPage";

describe("Favorites functionality", () => {
  let store: EnhancedStore;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        favorites: favoritesReducer,
      },
    });
  });

  it("displays a message when no books are in favorites", () => {
    render(
      <Provider store={store}>
        <FavoritesPage />
      </Provider>
    );

    expect(screen.getByText("No favorites added.")).toBeInTheDocument();
  });

  it("adds a book to favorites", () => {
    store.dispatch(
      addFavorite({
        id: "1",
        title: "The Great Gatsby",
        authors: ["F. Scott Fitzgerald"],
        image: "https://example.com/gatsby.jpg",
        description: "",
      })
    );

    render(
      <Provider store={store}>
        <FavoritesPage />
      </Provider>
    );

    expect(screen.getByText("The Great Gatsby")).toBeInTheDocument();
    expect(screen.getByText("❌ Remove")).toBeInTheDocument();
  });

  it("removes a book from favorites", () => {
    store.dispatch(
      addFavorite({
        id: "2",
        title: "1984",
        authors: ["George Orwell"],
        image: "https://example.com/1984.jpg",
        description: "",
      })
    );

    render(
      <Provider store={store}>
        <FavoritesPage />
      </Provider>
    );

    const removeButton = screen.getByText("❌ Remove");
    fireEvent.click(removeButton);

    store.dispatch(removeFavorite("2"));

    expect(screen.queryByText("1984")).not.toBeInTheDocument();
  });
});
