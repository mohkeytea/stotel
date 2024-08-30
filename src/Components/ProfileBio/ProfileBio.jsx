import React from 'react';
import './ProfileBio.css';

const ProfileBio = ({ bio }) => {
    return (
        <div className="profile-bio">
            <p>{bio}</p>
        </div>
    );
};

export default ProfileBio;
