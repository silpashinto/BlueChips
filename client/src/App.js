import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home"
import Stock from "./pages/stock"
import "./App.css";

function App() {
  return (  
<Router>
<div>
  <Nav />
  <Switch>
    <Route exact path="/stock/:symbol" component={Stock} />   
  </Switch>
  <Home />
</div>
</Router>

  );
}

export default App;
