import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EditProfileButton.css';

const EditProfileButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/edit-profile');
    };

    return (
        <button className="edit-profile-button" onClick={handleClick}>
            Edit Profile
        </button>
    );
};

export default EditProfileButton;
