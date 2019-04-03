import React, { Component } from "react";
import styles from "../Styles/Config.module.css";
import Sidebar from "../Components/Sidebar";
import Container from "../Components/Container";

class Config extends Component {
  render() {
    return (
      <div className={styles.config}>
        <Sidebar />
        <Container></Container></div>
    );
  }
}

export default Config;
