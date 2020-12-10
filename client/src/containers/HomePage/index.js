import React from 'react';
import { Link } from 'react-router-dom';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const HomePage = () => {
    return <div>

        <Header />

        <div class="row">
            <div class="col-7">
                <h2 id="hometitle">Welcome to Donate Miami!</h2>
            </div>
            <div clss="col-5"></div>
        </div>

        <div class="row">
            <div class="col-9">
                <p id="homepage">
                    <Link to="/login">Login</Link> or

                    <Link to="/signup"> Sign up </Link>

                    to make a donation to a local charity in Miami-Dade County.
                </p>

                <Link to="/dashboard">Go to Dashboard</Link>
            </div>
            <div class="col-3"></div>

        </div>

        <Footer />
    </div>
}
export default HomePage;