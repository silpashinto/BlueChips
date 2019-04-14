import React from "react";
import Home from "./pages/home"
import Searches from "./components/Search/SearchResultContainer";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Searches />
      <Home />
    </div>
  );
}

export default App;
