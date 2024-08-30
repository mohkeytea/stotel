// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import StoryDetail from './Components/StoryDetail/StoryDetail';
import ExplorePage from './Pages/ExplorePage/ExplorePage';
import Profile from './Components/Profile/Profile';
import StoryWriting from './Components/StoryWriting/StoryWriting';
import Monetization from './Components/Monetization/Monetization';
import DraftListPage from './Pages/DraftListPage/DraftListPage';
import HomePage from './Pages/HomePage/HomePage';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path='/home' element={<HomePage/>}/>
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/story/:id" element={<StoryDetail />} />
          <Route path="/monetization" element={<Monetization />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/write" element={<StoryWriting />} />
          <Route path="/drafts" element={<DraftListPage />} />
        </Routes>
    </Router>
  );
};

export default App;
