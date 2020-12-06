import React from 'react';
import {Link} from 'react-router-dom';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const HomePage = () => {
    return <div>

        <Header />

        <h2>Welcome to Donate Miami!</h2>

        <p>
        <Link to="/login">Login </Link> or     
        
        <Link to="/signup"> Sign up </Link>

        to make a donation to a local charity.</p>

        <Footer />
    </div>
}
export default HomePage;