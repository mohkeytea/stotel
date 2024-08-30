import React, { useState } from 'react';
import './StoryWriting.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FaSave, FaPaperPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { saveDraft, addStory, updateStory } from '../../services/firestoreservice'; 

const StoryWriting = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [draftId, setDraftId] = useState(null);
    const navigate = useNavigate();

    const categories = [
        'Love', 'Adventure', 'Mystery', 'Fantasy', 'Sci-Fi',
        'Historical', 'Horror', 'Comedy', 'Drama', 'Biography',
        'Thriller', 'Action', 'Romance', 'Poetry', 'Spiritual'
    ];

    const handleSaveDraft = async (e) => {
        e.preventDefault();
        if (title && content && category) {
            try {
                const storyData = { title, content, category };
                const id = await saveDraft(storyData);
                setDraftId(id);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    navigate('/home');
                }, 2000);
            } catch (error) {
                setError('Error saving draft. Please try again.');
            }
        } else {
            setError('Please fill in all fields.');
        }
    };

    const handlePostStory = async (e) => {
        e.preventDefault();
        if (title && content && category) {
            try {
                if (draftId) {
                    await postStory(draftId, { title, content, category });
                } else {
                    const id = await addStory({ title, content, category });
                    await postStory(id, { title, content, category });
                }
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    navigate('/home');
                }, 2000);
            } catch (error) {
                setError('Error posting story. Please try again.');
            }
        } else {
            setError('Please fill in all fields.');
        }
    };

    return (
        <div className="story-writing-page">
            <Navbar />
            <div className="story-writing-container">
                <h2 className="story-writing-title">Write a New Story</h2>
                <form className="story-writing-form">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter your story title"
                    />
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your story here"
                    />
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="" disabled>Select a category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                    {error && <p className="error-message">{error}</p>}
                    <div className="button-container">
                        <button type="button" className="save-draft" onClick={handleSaveDraft}>
                            <FaSave style={{ marginRight: '8px' }} /> Save as Draft
                        </button>
                        <button type="button" className="post-story" onClick={handlePostStory}>
                            <FaPaperPlane style={{ marginRight: '8px' }} /> Post Story
                        </button>
                    </div>
                    {success && <p className="success-message">Story posted successfully!</p>}
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default StoryWriting;
