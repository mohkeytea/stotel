import React from 'react';
import './UserStoryList.css';
import StoryCard from '../StoryCard/StoryCard';

const UserStoryList = ({ stories }) => {
    return (
        <div className="user-story-list">
            {stories.map(story => (
                <StoryCard key={story.id} story={story} />
            ))}
        </div>
    );
};

export default UserStoryList;
