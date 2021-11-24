import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer"

import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <ItemListContainer greeting="Testing this greeting..!" />
    </Router>
  );
}
