import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import { BsFillPersonFill } from 'react-icons/bs';

function Navbar() {
  return (
    <div id="containContainer">
      <nav id="navCotainer">
        <h1 id="title"><NavLink id="logoLink" to="/">Bookstore CMS</NavLink></h1>
        <ul id="links">
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/">BOOKS</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/categories">CATEGORIES</NavLink>
          </li>
        </ul>
        <button type="button" id="personButton">
          <BsFillPersonFill style={{ color: '#0290ff', fontSize: '20px', marginTop: '2px' }} />
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
