import React, { Component } from "react";
import styles from "../Styles/FirstPage.module.css";
import LoginForm from "../Components/LoginForm";
class FirstPage extends Component {
  render() {
    return (
      <div className={`${styles.firstPage} wrapper`}>
        <img
          className={styles.backgroundImage}
          src={require("../images/background-login.svg")}
          alt="Background"
        />
        <LoginForm className={styles.test} />
      </div>
    );
  }
}

export default FirstPage;
