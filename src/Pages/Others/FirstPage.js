import React from "react";
import styles from "../../Styles/FirstPage.module.css";
import LoginForm from "../../Components/LoginForm";
import Title from "../../Components/Title";

export default (props) =>{
  const { title } = props;
    return (
      <div className={`${styles.firstPage} wrapper`}>
        <Title>{title}</Title>
        <div className={styles.content}>
          <img
            className={styles.backgroundImage}
            src={require("../../images/background-login.svg")}
            alt="Background"
          />
          <LoginForm className={styles.test} />
        </div>
      </div>
    );
};
