import React from "react";
import styles from "../Styles/SectionContent.module.css";

export default props => {
  const { children, type } = props;
  switch (type) {
    case "start":
      return <div className={styles.sectionContentStart}>{children}</div>;
    case "evenly":
      return <div className={styles.sectionContentEvenly}>{children}</div>;
    default:
      return <div className={styles.sectionContent}>{children}</div>;
  }
};
