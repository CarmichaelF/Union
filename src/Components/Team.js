import React from "react";
import styles from "../Styles/Team.module.css";

export default props => {
  const { teamName, children } = props;
  return (
    <div className={styles.team}>
      <h1 className={styles.title}>{teamName}</h1>
      <div className={styles.students}>{children}</div>
    </div>
  );
};
