import React from 'react';
import './CommentSection.css';

const CommentSection = ({ comments }) => {
    return (
        <div className="comment-section">
            <h2 className="comment-section-title">Comments</h2>
            {comments.length > 0 ? (
                <ul className="comment-list">
                    {comments.map((comment, index) => (
                        <li key={index} className="comment-item">
                            <p className="comment-text">{comment.text}</p>
                            <p className="comment-author">- {comment.author}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-comments">No comments yet.</p>
            )}
        </div>
    );
};

export default CommentSection;
