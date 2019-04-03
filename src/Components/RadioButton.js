import React from "react";
import styles from "../Styles/RadioButton.module.css";

export default props => {
  const { name, children } = props;
  return (
    <div>
      <input className={styles.input} type="radio" name={name} />
      <label className={styles.label} for={children}>
        {children}
      </label>
    </div>
  );
};
