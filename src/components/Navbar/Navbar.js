import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/catalog" className="navbar-link">Catalog</Link>
                <Link to="/contact" className="navbar-link">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
