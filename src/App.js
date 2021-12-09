import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


import { BrowserRouter as Router } from "react-router-dom";
//<></>

export default function App() {
  return (
    <Router>
      <Navbar />
      <ItemListContainer />
    </Router>
  );
}
