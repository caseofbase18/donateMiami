import React from 'react';

import Header from "../../components/Header";
import NavTabs from "../../components/NavTabs";
import Footer from "../../components/Footer";
import VolunteerForm from '../../components/VolunteerForm';

const Volunteer = () => {
    return <div>

        {/* <Header /> */}

        <NavTabs />
        <br></br>

        <VolunteerForm />

        <Footer />
    </div>
}
export default Volunteer;