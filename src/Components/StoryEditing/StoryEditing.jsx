import React, { useState, useEffect } from 'react';
import './StoryEditing.css';

const StoryEditing = ({ story, onUpdateStory }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (story) {
            setTitle(story.title);
            setContent(story.content);
            setCategory(story.category);
        }
    }, [story]);

    const handleUpdateStory = (e) => {
        e.preventDefault();
        if (title && content && category) {
            onUpdateStory({ ...story, title, content, category });
        } else {
            setError('Please fill in all fields.');
        }
    };

    return (
        <div className="story-editing-container">
            <h2 className="story-editing-title">Edit Story</h2>
            <form className="story-editing-form">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <label htmlFor="category">Category</label>
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
                {error && <p className="error-message">{error}</p>}
                <button type="button" className="update-story" onClick={handleUpdateStory}>Update Story</button>
            </form>
        </div>
    );
};

export default StoryEditing;
