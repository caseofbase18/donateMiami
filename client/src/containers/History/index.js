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
      
        
          <h2 id="histitle">History Page</h2>
      

      <p id="hispage">
        Here is your donation and volunteer history.
      </p>

      <h3 id="donvolhistory">Donation History</h3>
      {/* <button onClick={donateHistory} classNameName="btn btn-success shadow" id="donbutton">Donation History</button> */}

      <DonationHistory />

      {/* <p id="hispage">
        It will also contain a line graph of user's volunteer hours year-to-date, if applicable.
      </p> */}
      {/* <button onClick={volunteerHistory} classNameName="btn btn-primary shadow" id="volbutton">Volunteer History</button> */}
      <h3 id="donvolhistory">Volunteer History</h3>
      <VolunteerHistory />

      <Footer />

    </div>
  );
}

export default History;
