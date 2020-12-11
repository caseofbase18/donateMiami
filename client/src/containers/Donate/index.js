import React from 'react';

import Header from "../../components/Header";
import NavTabs from "../../components/NavTabs";
import Footer from "../../components/Footer";
import DonateForm from '../../components/DonateForm';

const Donate = () => {
    return <div>

        {/* <Header /> */}

        <NavTabs />
        <br></br>

        <DonateForm />

        <Footer />
    </div>
}
export default Donate;