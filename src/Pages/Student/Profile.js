import React, { Component } from "react";
import styles from "../../Styles/Profile.module.css";
import Sidebar from "../../Components/Sidebar";
import Container from "../../Components/Container";
import ProfileContent from "../../Components/ProfileContent";

class Profile extends Component {
  render() {
    return (
      <div className={styles.profile}>
        <Sidebar />
        <Container>
          <ProfileContent />
        </Container>
      </div>
    );
  }
}

export default Profile;
