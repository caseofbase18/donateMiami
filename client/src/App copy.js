import React from "react";
import AppContainer from "./components/AppContainer";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">

      <Header />
      <AppContainer />
      <Footer />

    </div>
  );
}

export default App;
