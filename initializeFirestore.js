import { getFirestore, doc, setDoc, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4r8h3koIJDa-WSY1euC7uSHNbxHjnu0g",
    authDomain: "stotel-2c940.firebaseapp.com",
    projectId: "stotel-2c940",
    storageBucket: "stotel-2c940.appspot.com",
    messagingSenderId: "103524332557",
    appId: "1:103524332557:web:4686d98422e143e55a9144",
    measurementId: "G-GB4F99YN84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add a user
async function addUser(userId, username, email, profileImage, bio) {
    await setDoc(doc(db, "Users", userId), {
        username,
        email,
        profileImage,
        bio,
        createdAt: new Date(),
    });
    console.log("User added!");
}

// Function to add a story
async function addStory(storyId, authorId, title, content, category, isDraft, isFeatured) {
    await setDoc(doc(db, "Stories", storyId), {
        authorId,
        title,
        content,
        category,
        likesCount: 0,
        commentsCount: 0,
        isDraft,
        isFeatured,
        createdAt: new Date(),
    });
    console.log("Story added!");
}

// Function to add a comment to a story
async function addComment(storyId, commentId, authorId, content) {
    await setDoc(doc(db, "Stories", storyId, "Comments", commentId), {
        authorId,
        content,
        createdAt: new Date(),
    });
    console.log("Comment added!");
}

// Adding some sample data
async function addSampleData() {
    // Add Users
    await addUser("user1", "John Doe", "john@example.com", "https://example.com/john.jpg", "A passionate writer.");
    await addUser("user2", "Jane Smith", "jane@example.com", "https://example.com/jane.jpg", "Lover of stories.");

    // Add Stories
    await addStory("story1", "user1", "My First Adventure", "Once upon a time...", "Adventure", false, true);
    await addStory("story2", "user1", "A Day in the Forest", "The trees whispered secrets...", "Mystery", false, false);
    await addStory("story3", "user2", "The Haunted House", "The house at the end of the street...", "Horror", true, false); // Draft
    await addStory("story4", "user2", "Journey to the Stars", "Space is vast and full of wonders...", "Sci-Fi", false, true);

    // Add Comments
    await addComment("story1", "comment1", "user2", "Great story, loved the adventure!");
    await addComment("story2", "comment2", "user1", "The mystery kept me on edge!");

    console.log("Sample data added successfully!");
}

// Execute the function to add sample data
addSampleData();
