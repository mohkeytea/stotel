import React from 'react';
import './Monetization.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Monetization = () => {
    return (
        <div className="monetization">
            <Navbar />
            <main className="monetization-content">
                <h1>Monetize Your Stories</h1>
                <p>Learn how you can earn money by sharing your stories on our platform. We offer several monetization options to help you get the most out of your content.</p>
                <div className="monetization-options">
                    <div className="monetization-option">
                        <h2>Ad Revenue</h2>
                        <p>Earn money through ads displayed on your stories. More views mean more earnings!</p>
                    </div>
                    <div className="monetization-option">
                        <h2>Subscriptions</h2>
                        <p>Offer premium content through subscriptions. Build a following and earn recurring revenue.</p>
                    </div>
                    <div className="monetization-option">
                        <h2>Donations</h2>
                        <p>Enable your readers to support you directly through donations. Every little bit helps!</p>
                    </div>
                </div>
                <button className="monetization-button">Learn More</button>
                <section className="account-management">
                    <h2>Manage Your Account</h2>
                    <p>Track your earnings, manage payment methods, and view your transaction history all in one place.</p>
                    <div className="account-links">
                        <a href="/account/settings" className="account-link">Account Settings</a>
                        <a href="/transactions" className="account-link">Transaction History</a>
                        <a href="/payment-methods" className="account-link">Payment Methods</a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Monetization;
