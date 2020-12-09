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
        View favorite organizations.
      </p>

      <FavoritesTable />

      <Footer />

    </div>
  );
}

export default Favorites;
