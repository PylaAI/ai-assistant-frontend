import React from "react";
import { Link } from "react-router-dom";
import "./css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="Logo" className="navbar-logo" />
        <span>Brawl Time Ninja</span>
      </div>
      <div className="navbar-links">
        <Link to="/profile" className="navbar-link">Profile</Link>
        <Link to="/maps" className="navbar-link">Maps</Link>
        <Link to="/brawlers" className="navbar-link">Brawlers</Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="navbar-language">
        <select className="language-select">
          <option value="en">EN</option>
          <option value="gb">GB</option>
        </select>
      </div>
    </nav>
  );
};

export default NavBar;
