import React from "react";
//import { Link, Route } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


function History(props) {
  return (
    <div>

      <Header />

      <h1>History Page</h1>
      <p>
        This page will contain a line graph of user's donations year-to-date.

        It will also contain a line graph of user's volunteer hours year-to-date, if applicable.
      </p>

      <Footer />

    </div>
  );
}

export default History;
