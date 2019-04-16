import React from "react";
import Home from "./pages/home"
import Searches from "./components/Search/SearchResultContainer";
import News from "./components/News/NewsResultContainer";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <Searches />
      <News />
      <Home />
    </div>
  );
}

export default App;
