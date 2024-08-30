import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = ({ user }) => {
    return (
        <div className="profile-header">
            <img src={user.profilePicture} alt="Profile" className="profile-header-picture" />
            <h1 className="profile-header-username">{user.username}</h1>
        </div>
    );
};

export default ProfileHeader;
