import React, { Component } from "react";
import { Route } from "react-router-dom";
import FirstPage from "./Pages/FirstPage";
import SignUp from "./Pages/SignUp";
import Section from "./Pages/Section";
import Stats from "./Pages/Stats";
import Profile from "./Pages/Profile";
import Config from "./Pages/Config";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" render={() => <FirstPage title="Union" />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/section" render={() => <Section />} />
        <Route exact path="/stats" render={() => <Stats />} />
        <Route exact path="/profile" render={() => <Profile />} />
        <Route exact path="/config" render={() => <Config />} />
      </>
    );
  }
}

export default App;
