import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './StoryDetail.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { FaRegCommentDots, FaShareAlt, FaThumbsUp, FaMoon, FaSun } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { db } from '../../services/firebase'; 
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

const StoryDetail = () => {
    const { id: storyId } = useParams();
    const [story, setStory] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const storyDoc = await getDoc(doc(db, 'stories', storyId));
                if (storyDoc.exists()) {
                    setStory(storyDoc.data());
                } else {
                    console.error('No such story exists!');
                }
            } catch (error) {
                console.error('Error fetching story:', error);
            }
        };

        const fetchComments = async () => {
            try {
                const commentsQuery = query(
                    collection(db, 'stories', storyId, 'comments')
                );
                const commentSnapshot = await getDocs(commentsQuery);
                const commentsList = commentSnapshot.docs.map(doc => doc.data());
                setComments(commentsList);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchStory();
        fetchComments();
    }, [storyId]);

    const handleCommentSubmit = async () => {
        if (newComment.trim() !== '') {
            // Logic to add a new comment to Firestore
            // ...
            setNewComment('');
        }
    };

    const handleLike = async () => {
        if (story) {
            try {
                // Logic to increment likes in Firestore
                // ...
                setStory(prevStory => ({ ...prevStory, likes: prevStory.likes + 1 }));
            } catch (error) {
                console.error('Error liking story:', error);
            }
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`story-detail-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <Navbar />
            <div className="story-detail-container">
                <div className="story-detail-header">
                    <h1>{story?.title}</h1>
                    <p className="author">by {story?.author}</p>
                    <button className="toggle-dark-mode" onClick={toggleDarkMode}>
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
                <div className="story-content">
                    {story ? <p>{story.content}</p> : <p>Loading story content...</p>}
                </div>
                <div className="story-actions">
                    <div className="action-button" onClick={handleLike}>
                        <FaThumbsUp className="icon" />
                        <span>Like ({story?.likes ?? 0})</span>
                    </div>
                    <div className="action-button">
                        <FaShareAlt className="icon" />
                        <span>Share</span>
                    </div>
                </div>
                <div className="comments-section">
                    <h3>Comments</h3>
                    <div className="comments-list">
                        {comments.map((comment, index) => (
                            <div key={index} className="comment">
                                <strong>{comment.user}</strong>
                                <p>{comment.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="add-comment">
                        <textarea
                            placeholder="Write a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <button className="comment-button" onClick={handleCommentSubmit}>
                            <FaRegCommentDots className="icon" />
                            <span>Comment</span>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StoryDetail;
