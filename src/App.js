import React from "react";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example"

function App() {
  return (
    <Router>
      {/* <Route path="/" component={Example}></Route> */}
      <Route path="/" component={LandingPage}></Route>
    </Router>
  );
}

export default App;
