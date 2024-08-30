import React, { useState, useEffect } from 'react';
import './Profile.css';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import Navbar from '../Navbar/Navbar';
import ProfileBio from '../ProfileBio/ProfileBio';
import ProfileStats from '../ProfileStats/ProfileStats';
import UserStoryList from '../UserStoryList/UserStoryList';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import EditProfileButton from '../EditProfileButton/EditProfileButton';
import { getUserProfile, getUserStories } from '../../services/FirestoreService';
import Footer from '../Footer/Footer';

const Profile = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [userStories, setUserStories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userProfile = await getUserProfile(userId);
                const stories = await getUserStories(userId);
                
                setUser(userProfile);
                setUserStories(stories);
            } catch (error) {
                console.error("Error fetching profile data: ", error);
                setUser(null);
                setUserStories([]);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchData();
        }
    }, [userId]);

    if (loading) {
        
        return  <LoadingSpinner /> ;
        
    }

    if (!user) {
        return <p>User profile not found.</p>;
    }

    return (
        <div className="profile">
             <Navbar/>
            <ProfileHeader user={user} />
            <ProfileBio bio={user.bio} />
            <ProfileStats 
                storiesWritten={user.storiesWritten}
                storiesLiked={user.storiesLiked}
                commentsMade={user.commentsMade}
            />
            <UserStoryList stories={userStories} />
            <EditProfileButton />
            <Footer/>
        </div>
    );
};

export default Profile;
