import React, { Component } from "react";
import styles from "../Styles/Profile.module.css";
import Sidebar from "../Components/Sidebar";
import Container from "../Components/Container";

class Profile extends Component {
  render() {
    return (
      <div className={styles.profile}>
        <Sidebar />
        <Container></Container></div>
    );
  }
}

export default Profile;
