import React from "react";
import styles from "../../Styles/Config.module.css";
import Sidebar from "../../Components/Sidebar";
import Container from "../../Components/Container";

export default () => {
  return (
    <div className={styles.config}>
      <Sidebar />
      <Container />
    </div>
  );
};
