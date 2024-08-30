import React from 'react';
import './UserCommentList.css';

const UserCommentList = ({ comments }) => {
    return (
        <div className="user-comment-list">
            <h2>User Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserCommentList;
