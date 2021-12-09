import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ListItem from "./components/ListItem/ListItem"


import { BrowserRouter as Router } from "react-router-dom";
//<></>

export default function App() {
  return (
    <Router>
      <Navbar />
      <ListItem />
    </Router>
  );
}
