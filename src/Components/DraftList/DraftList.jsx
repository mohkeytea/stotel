import React, { useEffect, useState } from 'react';
import './DraftList.css';
import { getDrafts, deleteDraft } from '../../services/FirestoreService';
import StoryCard from '../StoryCard/StoryCard';

const DraftList = ({ onEditDraft }) => {
    const [drafts, setDrafts] = useState([]);

    useEffect(() => {
        const fetchDrafts = async () => {
            try {
                const draftsData = await getDrafts(); // Fetch drafts from Firestore
                setDrafts(draftsData);
            } catch (error) {
                console.error("Error fetching drafts:", error);
            }
        };

        fetchDrafts();
    }, []);

    const handleDeleteDraft = async (draftId) => {
        try {
            await deleteDraft(draftId); // Delete draft from Firestore
            setDrafts(drafts.filter(draft => draft.id !== draftId));
        } catch (error) {
            console.error("Error deleting draft:", error);
        }
    };

    return (
        <div className="draft-list-container">
            <h2 className="draft-list-title">Your Drafts</h2>
            <div className="draft-list">
                {drafts.length > 0 ? (
                    drafts.map(draft => (
                        <div key={draft.id} className="draft-card">
                            <StoryCard 
                                story={draft} 
                                onEdit={() => onEditDraft(draft)}
                            />
                            <button
                                className="delete-draft"
                                onClick={() => handleDeleteDraft(draft.id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No drafts available.</p>
                )}
            </div>
        </div>
    );
};

export default DraftList;
