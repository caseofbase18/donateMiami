import React, { useState, useEffect } from 'react';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VolunteerHistory from "../../components/VolunteerHistory";
import DonationHistory from "../../components/DonationHistory";

function History(props) {

  // const [transactions, setTransactions] = useState([]);
  // const [times, setTimes] = useState([]);

  // // When component mounts, load donation transactions from db
  // useEffect(() => {
  //   loadTransactions()
  // }, []);

  // function loadTransactions() {
  //   API.getTransactions()
  //     .then(res =>
  //       //setTransactions(res.data)
  //       console.log(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  function donateHistory(event) {
    event.preventDefault();
    console.log("Donation History");
  };

  // // When component mounts, load volunteer times from db
  // useEffect(() => {
  //   loadTimes()
  // }, []);

  // function loadTimes() {
  //   API.getTimes()
  //     .then(res =>
  //       setTimes(res.data)
  //       // console.log(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  function volunteerHistory(event) {
    event.preventDefault();
    console.log("Volunteer History");
  }

  return (
    <div>

      <Header />
      <div class="row">
        <div class="col-6">
          <h2 id="histitle">History Page</h2>
        </div>
        <div class="col-6"></div>
      </div>


      <h2 id="histitle">History Page</h2>

      <p id="hispage">
        This page will contain a line graph of user's donations year-to-date.
      </p>
      <button onClick={donateHistory} className="btn btn-success shadow" id="donbutton">Donation History</button>

      <DonationHistory />

      <p id="hispage">
        It will also contain a line graph of user's volunteer hours year-to-date, if applicable.
      </p>
      <button onClick={volunteerHistory} className="btn btn-primary shadow" id="volbutton">Volunteer History</button>

      <VolunteerHistory />

      <Footer />

    </div>
  );
}

export default History;
