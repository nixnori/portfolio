import React, { useState } from "react";
import "./App.scss";
import Welcome from "./components/Welcome/Welcome";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Welcome />
    </div>
  );
};

export default App;
