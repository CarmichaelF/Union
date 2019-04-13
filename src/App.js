import React, { Component } from "react";
import { Route } from "react-router-dom";
import FirstPage from "./Pages/Others/FirstPage";
import SignUp from "./Pages/Others/SignUp";
import Section from "./Pages/Student/Section";
import Stats from "./Pages/Student/Stats";
import Profile from "./Pages/Student/Profile";
import Config from "./Pages/Student/Config";
import TeacherSection from "./Pages/Teacher/TeacherSection";
import TeacherStats from './Pages/Teacher/TeacherStats';
import TeacherProfile from './Pages/Teacher/TeacherProfile';
import TeacherConfig from './Pages/Teacher/TeacherConfig';
import TeacherTeams from './Pages/Teacher/TeacherTeams';
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" render={() => <FirstPage title="Union" />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/student/section" render={() => <Section />} />
        <Route exact path="/student/stats" render={() => <Stats />} />
        <Route exact path="/student/profile" render={() => <Profile />} />
        <Route exact path="/student/config" render={() => <Config />} />

        <Route exact path="/teacher/section" render={() => <TeacherSection />} />
        <Route exact path="/teacher/stats" render={() => <TeacherStats />} />
        <Route exact path="/teacher/profile" render={() => <TeacherProfile />} />
        <Route exact path="/teacher/config" render={() => <TeacherConfig />} />
        <Route exact path="/teacher/teams" render={() => <TeacherTeams/>} />
      </>
    );
  }
}

export default App;
