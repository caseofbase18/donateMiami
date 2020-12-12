import React from 'react';
import { Link } from 'react-router-dom';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FooterSmall from '../../components/FooterSmall';

const HomePage = () => {
    return <div>

        <Header />

        <h2 id="hometitle">Welcome to Donate Miami!</h2>

        <p id="homepage">
            <Link to="/login">Login</Link> or <Link to="/signup"> Sign up </Link> to make a donation to a local charity in Miami-Dade County.
        </p>

        <FooterSmall />

    </div>
}
export default HomePage;