import React, { useState } from "react";
import "./App.scss";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Welcome />
      <About />
      <Projects />
    </div>
  );
};

export default App;
