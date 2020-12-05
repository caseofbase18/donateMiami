import React from "react";

import AppContainer from "../components/AppContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from "../components/Table";

function Home() {

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Welcome to Donate Miami! Use the buttons below to make a donation of your time or money to a local non-profit charity.
      </p>

      <Header />

      {/* <AppContainer />

      <Table /> */}

      <Footer />

    </div>
  );
}



export default Home;
