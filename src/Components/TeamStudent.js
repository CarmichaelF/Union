import React from "react";
import styles from "../Styles/TeamStudent.module.css";

export default props => {
  const { type = "on", children } = props;
  return (
    <div className={styles.student}>
      {type === "on" ? (
        <>
          <p className={styles.studentName}>{children}</p>
          <div className={styles.studentStatus} />
        </>
      ) : (
        <>
          <p className={styles.studentNameOff}>{children}</p>
          <div className={styles.studentStatusOff} />
        </>
      )}
    </div>
  );
};
