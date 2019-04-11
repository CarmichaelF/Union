import React, { Component } from "react";
import { Route } from "react-router-dom";
import FirstPage from "./Pages/Student/FirstPage";
import SignUp from "./Pages/Student/SignUp";
import Section from "./Pages/Student/Section";
import Stats from "./Pages/Student/Stats";
import Profile from "./Pages/Student/Profile";
import Config from "./Pages/Student/Config";
import Questions from "./Pages/Student/Questions";
import TeacherSection from "./Pages/Teacher/TeacherSection";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" render={() => <FirstPage title="Union" />} />
        <Route exact path="/student/signup" render={() => <SignUp />} />
        <Route exact path="/student/section" render={() => <Section />} />
        <Route exact path="/student/stats" render={() => <Stats />} />
        <Route exact path="/student/profile" render={() => <Profile />} />
        <Route exact path="/student/config" render={() => <Config />} />
        <Route exact path="/student/questions" render={() => <Questions />} />

        <Route exact path="/teacher/section" render={() => <TeacherSection />} />
      </>
    );
  }
}

export default App;
