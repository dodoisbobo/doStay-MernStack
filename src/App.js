import React from "react";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";

function App() {
  return (
    <Router>
      <Route path="/" component={LandingPage}></Route>
    </Router>
  );
}

export default App;
