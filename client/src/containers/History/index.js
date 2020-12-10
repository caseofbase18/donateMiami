import React from "react";
//import { Link, Route } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


function History(props) {
  return (
    <div>

      <Header />
      <div class="row">
        <div class="col-6">
          <h2 id="histitle">History Page</h2>
        </div>
        <div class="col-6"></div>
      </div>


      <p id="hispage">
        This page will contain a line graph of user's donations year-to-date.

        It will also contain a line graph of user's volunteer hours year-to-date, if applicable.
      </p>

      <Footer />

    </div>
  );
}

export default History;
