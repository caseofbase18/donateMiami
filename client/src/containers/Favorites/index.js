import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FavoritesTable from "../../components/FavoritesTable";

function Favorites() {
  return (
    <div>

      <Header />

      <h1> Favorites Page </h1>
      <p>
        This page will contain a table of the orgainizations the user has selected as favorites.
      </p>

      <FavoritesTable />

      <Footer />

    </div>
  );
}

export default Favorites;
