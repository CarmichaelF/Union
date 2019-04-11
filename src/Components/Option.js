import React from "react";
import styles from "../Styles/Option.module.css";

export default props => {
  const { children } = props;
  return <p className={styles.option}>{children}</p>;
};
