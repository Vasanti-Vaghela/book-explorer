import React from "react";
import { TextEncoder } from "util";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

describe("Navbar Component", () => {
  const renderNavbar = (initialRoute: string) => {
    render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <Navbar />
      </MemoryRouter>
    );
  };

  it("renders the Navbar with Search and Favorites links", () => {
    renderNavbar("/");

    expect(screen.getByText("Book Explorer")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();
  });

  it("applies correct styles to the active link", () => {
    renderNavbar("/favorites");

    const searchLink = screen.getByText("Search");
    const favoritesLink = screen.getByText("Favorites");

    // Check that "Favorites" is active (aria-current="page")
    expect(favoritesLink).toHaveAttribute("aria-current", "page");
    expect(searchLink).not.toHaveAttribute("aria-current");
  });
});
