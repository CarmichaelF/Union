import React from "react";
import styles from "../Styles/Container.module.css";
import Title from "../Components/Title";

export default props => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Title>Union</Title>
      {children}
    </div>
  );
};
