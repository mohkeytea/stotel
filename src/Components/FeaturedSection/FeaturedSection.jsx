import React, { useEffect, useState } from 'react';
import './FeaturedSection.css';
import StoryCard from '../StoryCard/StoryCard';
import { getFeaturedStories } from '../../services/FirestoreService';
const FeaturedSection = () => {
    const [featuredStories, setFeaturedStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeaturedStories = async () => {
            try {
                const stories = await getFeaturedStories();
                setFeaturedStories(stories);
            } catch (error) {
                setError("Error fetching featured stories.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedStories();
    }, []);

    if (loading) return <p>Loading featured stories...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="featured-section">
            <h2>Featured Stories</h2>
            <div className="featured-cards">
                {featuredStories.length === 0 ? (
                    <p>No featured stories available.</p>
                ) : (
                    featuredStories.map(story => (
                        <StoryCard 
                            key={story.id}
                            story={story}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default FeaturedSection;
