import React from "react";
import { BrowserRouter } from "react-router-dom";
import logo from "./assets/logo.svg";
import NavBar from "./components/NavBar";
import "./styles/_index.scss";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </BrowserRouter>
);

export default App;
