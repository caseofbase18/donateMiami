import React from 'react';

import Header from "../../components/Header";
import NavTabs from "../../components/NavTabs";
import Select from "../../components/Select";
import Footer from "../../components/Footer";
import Table from "../../components/Table";

import "../../pages/style.css";

const Dashboard = () => {
    return <div>

        <Header />

        {/* <NavTabs /> */}
        <br></br>

        {/* <h1>Home Page</h1> */}
        <h1>Welcome to Donate Miami!</h1>

        <Select />
        <br></br>
        
        <p id="usebtns">Use the buttons below to make a donation of your time or money to a local non-profit charity.</p>

        <Table />

        <Footer />
    </div>
}
export default Dashboard;