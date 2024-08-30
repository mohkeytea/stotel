import React, { useState } from 'react';
import './Sidebar.css';
import { FaHome, FaSearch, FaUser, FaDollarSign, FaBars, FaTimes, FaPen, FaBell, FaCog } from 'react-icons/fa';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-toggle" onClick={toggleSidebar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className="sidebar-links">
                <li>
                    <a href="/home">
                        <FaHome className="sidebar-icon" />
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="/explore">
                        <FaSearch className="sidebar-icon" />
                        <span>Explore</span>
                    </a>
                </li>
                <li>
                    <a href="/write">
                        <FaPen className="sidebar-icon" />
                        <span>Write</span>
                    </a>
                </li>
                <li>
                    <a href="/profile">
                        <FaUser className="sidebar-icon" />
                        <span>Profile</span>
                    </a>
                </li>
                <li>
                    <a href="/notifications">
                        <FaBell className="sidebar-icon" />
                        <span>Notifications</span>
                    </a>
                </li>
                <li>
                    <a href="/monetization">
                        <FaDollarSign className="sidebar-icon" />
                        <span>Monetization</span>
                    </a>
                </li>
                <li>
                    <a href="/settings">
                        <FaCog className="sidebar-icon" />
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
