import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, Timestamp } from "firebase/firestore";

// Firebase configuration
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

// Sample stories to add to Firestore
const stories = [
  {
    title: "The Journey of Love",
    content: "It all began on a quiet afternoon, with a gentle breeze sweeping through the city...",
    author: "John Doe",
    category: "Love",
    timestamp: Timestamp.fromDate(new Date()),
    isDraft: false,
    likesCount: 0,
    viewsCount: 0,
    commentsCount: 0,
  },
  {
    title: "The Lost Island Adventure",
    content: "On an uncharted island, a group of explorers stumble upon ancient secrets...",
    author: "Jane Smith",
    category: "Adventure",
    timestamp: Timestamp.fromDate(new Date()),
    isDraft: false,
    likesCount: 0,
    viewsCount: 0,
    commentsCount: 0,
  },
  {
    title: "The Mystery of the Forgotten Town",
    content: "In a town forgotten by time, strange things began to happen...",
    author: "Emily Johnson",
    category: "Mystery",
    timestamp: Timestamp.fromDate(new Date()),
    isDraft: false,
    likesCount: 0,
    viewsCount: 0,
    commentsCount: 0,
  },
  {
    title: "A Tale of Fantasy and Magic",
    content: "In a world filled with magic, a young sorcerer embarks on a journey...",
    author: "Michael Brown",
    category: "Fantasy",
    timestamp: Timestamp.fromDate(new Date()),
    isDraft: false,
    likesCount: 0,
    viewsCount: 0,
    commentsCount: 0,
  },
  {
    title: "The Rise of the Machines",
    content: "In a futuristic world, machines have taken over...",
    author: "Sophia Davis",
    category: "Sci-Fi",
    timestamp: Timestamp.fromDate(new Date()),
    isDraft: false,
    likesCount: 0,
    viewsCount: 0,
    commentsCount: 0,
  },
  {
    title: "The Great War of the Ages",
    content: "In a time of war, heroes rise and fall...",
    author: "William Taylor",
    category: "Historical",
    timestamp: Timestamp.fromDate(new Date()),
    isDraft: false,
    likesCount: 0,
    viewsCount: 0,
    commentsCount: 0,
  },
  {
    title: "The Haunted Mansion",
    content: "A group of friends dare to enter the haunted mansion on the hill...",
    author: "Isabella Martinez",
    category: "Horror",
    timestamp: Timestamp.fromDate(new Date()),
    isDraft: false,
    likesCount: 0,
    viewsCount: 0,
    commentsCount: 0,
  },
  {
    title: "The Comedy of Errors",
    content: "A series of hilarious events lead to unexpected outcomes...",
    author: "Alexander Wilson",
    category: "Comedy",
    timestamp: Timestamp.fromDate(new Date()),
    isDraft: false,
    likesCount: 0,
    viewsCount: 0,
    commentsCount: 0,
  },
  {
    title: "A Drama Unfolds",
    content: "In a small town, a dramatic series of events changes everything...",
    author: "Olivia Garcia",
    category: "Drama",
    timestamp: Timestamp.fromDate(new Date()),
    isDraft: false,
    likesCount: 0,
    viewsCount: 0,
    commentsCount: 0,
  },
  {
    title: "The Life of a Biography",
    content: "An inspiring tale of a person's life and achievements...",
    author: "Liam Harris",
    category: "Biography",
    timestamp: Timestamp.fromDate(new Date()),
    isDraft: false,
    likesCount: 0,
    viewsCount: 0,
    commentsCount: 0,
  },
];

// Function to add stories to Firestore
const addStoriesToFirestore = async () => {
  try {
    for (const story of stories) {
      const docRef = await addDoc(collection(db, "stories"), story);
      console.log("Story added with ID: ", docRef.id);
    }
  } catch (error) {
    console.error("Error adding stories: ", error);
  }
};

// Run the function
addStoriesToFirestore();
