import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav id="navCotainer">
      <h1 id="title">Bookstore MIP</h1>
      <ul id="links">
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/">Books</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/categories">Categories</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
