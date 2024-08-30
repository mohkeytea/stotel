import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
            <div className="navbar-logo">
                <h1>Stotel</h1>
            </div>
            <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <Link to="/home">Home</Link>
                <Link to="write">Share Story</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/monetization">Monetization</Link>
            </div>
            <div className="navbar-user">
                <button className="logout-button">Logout</button>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <FaBars />
            </div>
        </nav>
    );
};

export default Navbar;
