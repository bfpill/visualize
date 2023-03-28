import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <Link onClick={""} to="/" className='nav-link'>Chess</Link>
        <Link onClick={""} to="/About" className='nav-link'>Visualize</Link>
    </nav>
  );
}

export default Navbar;