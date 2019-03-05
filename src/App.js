import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Test from "./component/Test";
import Login from "./component/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Test} />
        </Switch>
      </div>
    );
  }
}

export default App;
