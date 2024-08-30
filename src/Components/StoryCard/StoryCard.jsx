import React from 'react';
import { FaHeart, FaClock, FaComment } from 'react-icons/fa'; // Import icons from React Icons
import './StoryCard.css';

const StoryCard = ({ story, onClick }) => {
    // Check if story data is available; if not, use default fallback values
    const isStoryAvailable = story && Object.keys(story).length > 0;
    
    const title = isStoryAvailable ? story.title || 'Untitled Story' : 'No Story Available';
    const contentPreview = isStoryAvailable ? 
        (story.content ? story.content.substring(0, 100) + '...' : 'No content available.') :
        'This story could not be loaded. Please try again later.';
    
    const likesCount = isStoryAvailable ? story.likesCount || 0 : 0;
    const commentsCount = isStoryAvailable ? story.commentsCount || 0 : 0;
    const timePosted = isStoryAvailable ? new Date(story.timestamp).toLocaleString() : 'Unknown';

    return (
        <div className="story-card" onClick={() => isStoryAvailable && onClick(story.id)}>
            <div className="story-card-header">
                <h3 className="story-card-title">{title}</h3>
            </div>
            <div className="story-card-body">
                <p className="story-card-content">{contentPreview}</p>
            </div>
            <div className="story-card-footer">
                <div className="story-card-icons">
                    <span className="icon">
                        <FaHeart /> {likesCount}
                    </span>
                    <span className="icon">
                        <FaComment /> {commentsCount}
                    </span>
                    <span className="icon">
                        <FaClock /> {timePosted}
                    </span>
                </div>
                {isStoryAvailable ? (
                    <button className="story-card-button" onClick={(e) => {
                        e.stopPropagation(); 
                        onClick(story.id);
                    }}>Read More</button>
                ) : (
                    <button className="story-card-button" disabled>Not Available</button>
                )}
            </div>
        </div>
    );
};

export default StoryCard;
