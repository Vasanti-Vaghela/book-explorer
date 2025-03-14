import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux"; //
import SearchForm from "./SearchForm";
import booksReducer from "../../store/books-slice";

describe("SearchForm Component", () => {
  let store: EnhancedStore;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        books: booksReducer,
      },
    });
    render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );
  });

  it("shows validation error when submitting empty fields", () => {
    // Find and click the search button
    const searchButton = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchButton);

    // Expect validation error message to appear
    expect(
      screen.getByText("Please fill in at least one field before searching.")
    ).toBeInTheDocument();
  });

  it("does not show error when at least one input is filled", () => {
    const titleInput = screen.getByPlaceholderText("Enter book title");
    fireEvent.change(titleInput, { target: { value: "Harry Potter" } });

    const searchButton = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchButton);

    // Ensure error message is not displayed
    expect(
      screen.queryByText("Please fill in at least one field before searching.")
    ).not.toBeInTheDocument();
  });
});
