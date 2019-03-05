import React, { Component } from "react";
import { Link } from "react-router-dom";

class Test extends Component {
  render() {
    return (
      <div>
        <Link to={"/login"}>to Login</Link>
      </div>
    );
  }
}

export default Test;
