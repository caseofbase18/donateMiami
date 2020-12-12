import React from 'react';

import Header from "../../components/Header";
import NavTabs from "../../components/NavTabs";
import Footer from "../../components/Footer";
import VolunteerHistory from "../../components/VolunteerHistory";
import DonationHistory from "../../components/DonationHistory";

function History(props) {

  return (
    <div>

      <NavTabs />
      <br></br>

      <h2 id="histitle">Giving History</h2>

      <p id="hispage">
        Here is your donation and volunteer history.
      </p>

      <h3 id="donhistory">Donation History</h3>
      <DonationHistory />
      <br></br>

      <h3 id="volhistory">Volunteer History</h3>
      <VolunteerHistory />
      <br></br>

      <Footer />

    </div>
  );
}

export default History;
