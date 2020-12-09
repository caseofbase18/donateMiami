import React from "react";
//import { Link, Route } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


function History(props) {
  return (
    <div>

      <Header />

      <h2 id="histitle">History Page</h2>
      <p id="hispage">
        This page will contain a line graph of user's donations year-to-date.
      </p>
      <p id="hispage">
        It will also contain a line graph of user's volunteer hours year-to-date, if applicable.
      </p>

      <Footer />

    </div>
  );
}

export default History;
