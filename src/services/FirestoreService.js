import db from './FirestoreConfig';
import { 
    collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy, limit, arrayUnion 
} from "firebase/firestore";

// Collection references
const storiesCollection = collection(db, 'stories');
const commentsCollection = (storyId) => collection(db, `stories/${storyId}/comments`);

// Add a new story
export const addStory = async (storyData) => {
    try {
        const docRef = await addDoc(storiesCollection, storyData);
        return docRef.id;
    } catch (error) {
        console.error("Error adding story: ", error);
        throw error;
    }
};

// Get all stories
export const getStories = async () => {
    try {
        const snapshot = await getDocs(storiesCollection);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error getting stories: ", error);
        return [];  // Return an empty array on failure
    }
};

// Get a single story by ID
export const getStoryById = async (storyId) => {
    try {
        const docRef = doc(db, 'stories', storyId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.warn("Story not found: ", storyId);
            return null;  // Return null if the story doesn't exist
        }
    } catch (error) {
        console.error("Error getting story: ", error);
        return null;  // Return null on failure
    }
};

export const getFeaturedStories = async () => {
    try {
        const q = query(
            storiesCollection,
            where('isFeatured', '==', true),
            orderBy('timestamp', 'desc'),
            limit(5) 
        );

        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error fetching featured stories: ", error);
        return []; 
    }
};

// Update a story
export const updateStory = async (storyId, updatedData) => {
    try {
        const docRef = doc(db, 'stories', storyId);
        await updateDoc(docRef, updatedData);
    } catch (error) {
        console.error("Error updating story: ", error);
        throw error;
    }
};

// Delete a story
export const deleteStory = async (storyId) => {
    try {
        const docRef = doc(db, 'stories', storyId);
        await deleteDoc(docRef);
    } catch (error) {
        console.error("Error deleting story: ", error);
        throw error;
    }
};

// Add a comment
export const addComment = async (storyId, commentData) => {
    try {
        const docRef = await addDoc(commentsCollection(storyId), commentData);
        return docRef.id;
    } catch (error) {
        console.error("Error adding comment: ", error);
        throw error;
    }
};

// Get comments for a story
export const getComments = async (storyId) => {
    try {
        const snapshot = await getDocs(commentsCollection(storyId));
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error getting comments: ", error);
        return [];  // Return an empty array on failure
    }
};

// Example function to get drafts
export const getDrafts = async (userId) => {
    try {
        const q = query(storiesCollection, where('userId', '==', userId), where('isDraft', '==', true));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error getting drafts: ", error);
        return [];  
    }
};

// Example function to delete a draft
export const deleteDraft = async (draftId) => {
    try {
        const docRef = doc(db, 'stories', draftId);
        await deleteDoc(docRef);
    } catch (error) {
        console.error("Error deleting draft: ", error);
        throw error;
    }
};

// Fetch user profile
export const getUserProfile = async (userId) => {
    if (!userId) {
        throw new Error('User ID is required');
    }
    
    try {
        const userDoc = await doc(db, 'users', userId).get();
        if (userDoc.exists()) {
            return userDoc.data();
        } else {
            throw new Error('User not found');
        }
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error; 
    }
};

// Example function to get user stories
export const getUserStories = async (userId) => {
    try {
        const q = query(storiesCollection, where('userId', '==', userId), where('isDraft', '==', false));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error getting user stories: ", error);
        return [];  // Return an empty array on failure
    }
};

// Example function to get story details
export const getStoryDetails = async (storyId) => {
    try {
        const docRef = doc(db, 'stories', storyId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.warn("Story not found: ", storyId);
            return null;  // Return null if the story doesn't exist
        }
    } catch (error) {
        console.error("Error getting story details: ", error);
        return null;  // Return null on failure
    }
};

// Example function to like a story
export const likeStory = async (storyId, userId) => {
    try {
        const docRef = doc(db, 'stories', storyId);
        await updateDoc(docRef, {
            likes: arrayUnion(userId)
        });
    } catch (error) {
        console.error("Error liking story: ", error);
        throw error;
    }
};

// Function to save a draft
export const saveDraft = async (storyData) => {
    try {
        const docRef = await addDoc(storiesCollection, { ...storyData, isDraft: true });
        return docRef.id;
    } catch (error) {
        console.error("Error saving draft: ", error);
        throw error;
    }
};

// Function to post a story
export const postStory = async (storyId, storyData) => {
    try {
        const docRef = doc(db, 'stories', storyId);
        await updateDoc(docRef, { ...storyData, isDraft: false });
    } catch (error) {
        console.error("Error posting story: ", error);
        throw error;
    }
};

