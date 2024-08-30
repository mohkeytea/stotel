import React from 'react';
import './ProfileStats.css';

const ProfileStats = ({ storiesWritten, storiesLiked, commentsMade }) => {
    return (
        <div className="profile-stats">
            <p><strong>Stories Written:</strong> {storiesWritten}</p>
            <p><strong>Stories Liked:</strong> {storiesLiked}</p>
            <p><strong>Comments Made:</strong> {commentsMade}</p>
        </div>
    );
};

export default ProfileStats;
