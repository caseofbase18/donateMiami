import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FavoritesTable from "../../components/FavoritesTable";

function Favorites() {
  return (
    <div>

      <Header />

      <h2 id="favtitle"> Favorites Page </h2>

      <p id="favpage">
        {/* This page will contain a table of the orgainizations the user has selected as favorites. */}
        Here is a list of your selected favorite organizations.  You can manage your favorites, donate money, or volunteer time.
      </p>

      <FavoritesTable />

      <Footer />

    </div>
  );
}

export default Favorites;
