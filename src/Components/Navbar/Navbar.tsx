import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

interface TIsActive {
  isActive: boolean;
}
const Navbar = () => {
  const activePage = ({ isActive }: TIsActive) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
  });
  return (
    <nav className="navbar">
      <div className="logo">Book Explorer</div>
      <div>
        <NavLink to="/" style={activePage}>
          Search
        </NavLink>
        <NavLink to="/favorites" style={activePage}>
          Favorites
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
