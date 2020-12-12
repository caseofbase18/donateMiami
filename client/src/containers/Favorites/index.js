import React from "react";

import Header from "../../components/Header";
import NavTabs from "../../components/NavTabs";
import Footer from "../../components/Footer";
import FavoritesTable from "../../components/FavoritesTable";

function Favorites() {
  return (
    <div>

      <NavTabs />
      <br></br>

      <h2 id="favtitle"> Favorites </h2>

      <p id="favpage">
        Here is a list of your selected favorite organizations.  You can manage your favorites, donate money, or volunteer time.
      </p>

      <FavoritesTable />

      <Footer />

    </div>
  );
}

export default Favorites;
