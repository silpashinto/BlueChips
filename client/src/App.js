import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home"
import Stock from "./pages/stock"
import Holdings from "./pages/holdings"
import Watchlist from "./pages/watchlist"
import "./App.css";

function App() {
   return (
    <Router>
      <div>
        <Nav /><br></br>
        <Switch>
          <Route exact path="/stock/:symbol" component={Stock} />
          <Route exact path="/" component={Home} />
          <Route exact path='/holdings/:userid' component={Holdings} />
          <Route exact path='/watchlist/:userid' component={Watchlist} />
          <Route exact path='/signout' component={Home} />

        </Switch>
      </div>
    </Router>

  );
}

export default App;
