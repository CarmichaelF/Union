import React, { Component } from "react";
import styles from "../Styles/Stats.module.css";
import Sidebar from "../Components/Sidebar";
import Container from "../Components/Container";

class Stats extends Component {
  render() {
    return (
      <div className={styles.stats}>
        <Sidebar />
        <Container></Container>
      </div>
    );
  }
}

export default Stats;
