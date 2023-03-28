import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <Link onClick={""} to="/">Home</Link>
        <Link onClick={""} to="/About">Visualize</Link>
    </nav>
  );
}

export default Navbar;