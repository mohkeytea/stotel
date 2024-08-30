import React, { useEffect, useState } from 'react';
import './HomePage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import StoryCard from '../../Components/StoryCard/StoryCard';
import Footer from '../../Components/Footer/Footer';
import SearchBar from '../../Components/SearchBar/SearchBar';
import FeaturedSection from '../../Components/FeaturedSection/FeaturedSection';
import { getStories, getFeaturedStories } from '../../services/FirestoreService';

const HomePage = () => {
    const [stories, setStories] = useState([]);
    const [featuredStories, setFeaturedStories] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const storiesData = await getStories();
                setStories(storiesData);

                const featuredData = await getFeaturedStories();
                setFeaturedStories(featuredData);
            } catch (error) {
                console.error("Error fetching stories:", error);
            }
        };

        fetchStories();
    }, []);

    return (
        <div className="home-page">
            <Navbar />
            <div className="main-content">
                <Sidebar />
                <div className="content">
                    <SearchBar  className="search-bar"/>
                    <FeaturedSection stories={featuredStories} />
                    <div className="stories-section">
                        <h2 className="section-title">Recent Stories</h2>
                        <div className="story-cards">
                            {stories.length > 0 ? (
                                stories.map(story => (
                                    <StoryCard 
                                        key={story.id}
                                        story={story}
                                    />
                                ))
                            ) : (
                                <p>No stories available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
