import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./views/main/MainPage";
import Login from "./views/Login";

class App extends Component {
  constructor(props) {
    super(props);
    if (typeof window === "undefined") {
      global.window = {};
    }
  }

  componentDidMount() {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
