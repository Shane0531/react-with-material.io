import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

class Test extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is <code>Test Page</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to={"/login"}>to Login Page</Link>
      </header>
    );
  }
}

export default Test;
