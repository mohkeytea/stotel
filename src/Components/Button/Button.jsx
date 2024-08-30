import React from 'react';
import './Button.css';

const Button = ({ onClick, children, type = 'primary', className = '' }) => {
    return (
        <button 
            className={`button ${type} ${className}`} 
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
