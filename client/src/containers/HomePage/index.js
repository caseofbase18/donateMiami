import React from 'react';

import Header from "../../components/Header";
import NavTabs from "../../components/NavTabs";
import Footer from "../../components/Footer";

const HomePage=()=>{
    return <div>

    <Header />

    <NavTabs />

    <h1>Home Page</h1>
    <p>
        Welcome to Donate Miami! Use the buttons below to make a donation of your time or money to a local non-profit charity.
    </p>

    {/* <AppContainer />

    <Table /> */}

    <Footer />
    </div>
}
export default HomePage;