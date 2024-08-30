import React from 'react';
import './DraftListPage.css';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import DraftList from '../../Components/DraftList/DraftList';
const DraftListPage = () => {
    return (
        <div className="draft-list-page">
            <Navbar />
            <div className="main-content">
                <Sidebar />
                <div className="draft-list-content">
                    <h1>Your Drafts</h1>
                    <DraftList />
                </div>
            </div>
        </div>
    );
};

export default DraftListPage;
