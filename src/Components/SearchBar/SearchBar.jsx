import React from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search for stories..." className="search-input" />
            <button type="button" className="search-button">
                <FaSearch className="search-icon" />
            </button>
        </div>
    );
};

export default SearchBar;
