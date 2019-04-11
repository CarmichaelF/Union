import React from "react";
import styles from "../Styles/TitleContent.module.css";

export default props => {
  const { type, children } = props;
  switch (type) {
    case "subtitle":
      return <h1 className={styles.subtitle}>{children}</h1>;
    default:
      return <h1 className={styles.titleContent}>{children}</h1>;
  }
};
