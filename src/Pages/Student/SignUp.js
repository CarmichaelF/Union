import React, { Component } from "react";
import styles from "../../Styles/SignUp.module.css";
import SignUpForm from "../../Components/SignUpForm";
import Button from "../../Components/Button";
import Title from "../../Components/Title";

class SignUp extends Component {
  render() {
    return (
      <div className={`${styles.signUp}`}>
        <div className={`wrapper $`}>
          <header className={styles.header}>
            <Button type="transparent">
              <img src={require("../../images/close.svg")} alt="Close icon" />
            </Button>
            <Title type="white">Union</Title>
          </header>
          <div className={styles.signUpForm}>
            <SignUpForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
