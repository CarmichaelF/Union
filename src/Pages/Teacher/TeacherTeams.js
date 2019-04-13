import React, { Component } from "react";
import styles from "../../Styles/TeacherTeams.module.css";
import Sidebar from "../../Components/Sidebar";
import Container from "../../Components/Container";
import Team from "../../Components/Team";
import TeamStudent from "../../Components/TeamStudent";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  render() {
    return (
      <div className={styles.flex}>
        <Sidebar type="teacher" />
        <Container>
          <div className={styles.teams}>
            <Team teamName="Time 1">
              <TeamStudent>Carmichael F.</TeamStudent>
              <TeamStudent>Paulo R.</TeamStudent>
              <TeamStudent type="off">Carlos Henrique</TeamStudent>
              <TeamStudent type="off">Thomas Aguiar</TeamStudent>
            </Team>
            <Team teamName="Time 2">
              <TeamStudent type="off">Carmichael F.</TeamStudent>
              <TeamStudent type="off">Paulo R.</TeamStudent>
              <TeamStudent>Carlos Henrique</TeamStudent>
              <TeamStudent>Thomas Aguiar</TeamStudent>
            </Team>
          </div>
        </Container>
      </div>
    );
  }
}

export default Teams;
