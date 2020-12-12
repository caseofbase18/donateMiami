import React, { useState } from 'react';

import Header from "../../components/Header";
import NavTabs from "../../components/NavTabs";
import Select from "../../components/Select";
import Footer from "../../components/Footer";
import Table from "../../components/Table";

import "../../pages/style.css";

const Dashboard = () => {

    // Setting our component's initial state
    const [selectedCategory, setSelectedCategory] = useState("");


    return <div>

        <NavTabs />
        <br></br>

        <h1 id="dashtitle"><u>Welcome to Donate Miami!</u></h1>
        
        <h4 id="dashparagraph"> Your site for supporting your favorite non-profit organizations in</h4>
        <h4 id="dashparagraph">Miami-Dade County!</h4>

        <h1 style={{ color: "#eb008b", textAlign: "center" }} id="heart">&hearts;</h1>

        <Select setSelectedCategory={setSelectedCategory} />
        <br></br>

        <Table selectedCategory={selectedCategory} />
        <br></br>

        <Footer />
    </div>
}
export default Dashboard;