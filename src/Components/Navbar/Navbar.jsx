import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

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

    const handleLogout = () => {
        // Perform logout logic here (e.g., clearing tokens, notifying backend, etc.)
        navigate('/login'); // Redirect to login page
    };

    return (
        <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
            <div className="navbar-logo">
                <h1>Stotel</h1>
            </div>
            <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <Link to="/home">Home</Link>
                <Link to="/write">Share Story</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/monetization">Monetization</Link>
            </div>
            <div className="navbar-user">
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <FaBars />
            </div>
        </nav>
    );
};

export default Navbar;
