import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount";

import { BrowserRouter as Router } from "react-router-dom";
//<></>

export default function App() {
  return (
    <Router>
      <Navbar />
      <ItemListContainer greeting="Testing this greeting..!" />
      <ItemCount initial="3" productName="Nirvana" stock="10"/>
      <ItemCount initial="1" productName="Jamaica" stock="5"/>
      <ItemCount initial="2" productName="Noruega" stock="3"/>
      <ItemCount initial="0" productName="Rusia"/>
    </Router>
  );
}
