import React from "react";
import styles from "../Styles/Container.module.css";
import Title from "../Components/Title";

export default () => {
  return (
    <div className={styles.container}>
      <Title>Union</Title>
      {this.props.children}
    </div>
  );
};
