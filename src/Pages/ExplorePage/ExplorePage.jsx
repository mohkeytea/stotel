import React, { useEffect, useState } from 'react';
import './ExplorePage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import StoryCard from '../../Components/StoryCard/StoryCard';
import { getStories } from '../../services/FirestoreService';
import { FaBars } from 'react-icons/fa'; 

const ExplorePage = () => {
    const [stories, setStories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [categories, setCategories] = useState(['All', 'Love', 'Adventure', 'Mystery', 'Fantasy', 'Sci-Fi', 'Historical', 'Horror', 'Comedy', 'Drama']);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to manage sidebar visibility

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const storiesData = await getStories(); 
                setStories(storiesData);
            } catch (error) {
                console.error("Error fetching stories:", error);
            }
        };

        fetchStories();
    }, []);

    const filteredStories = stories.filter(story => 
        (selectedCategory === 'All' || story.category === selectedCategory) &&
        story.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`explore-page ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <Navbar toggleSidebar={toggleSidebar} /> {/* Pass toggle function to Navbar */}
            <div className={`main-content ${isSidebarOpen ? 'with-sidebar' : 'without-sidebar'}`}>
                {isSidebarOpen && <Sidebar />}
                <div className="explore-section">
                    <div className="search-and-filter">
                        <input
                            type="text"
                            placeholder="Search stories..."
                            className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="category-filter">
                            <label htmlFor="categories">Category:</label>
                            <select
                                id="categories"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="story-cards">
                        {filteredStories.length > 0 ? (
                            filteredStories.map(story => (
                                <StoryCard 
                                    key={story.id}
                                    story={story}
                                />
                            ))
                        ) : (
                            <p>No stories found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExplorePage;
