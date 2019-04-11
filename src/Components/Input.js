import React from "react";
import styles from "../Styles/Input.module.css";

export default props => {
  const { color, type = "text", name, placeholder = "", handleResult } = props;
  switch (color) {
    case "white":
      return (
        <div className={styles.container}>
          <label className={styles.white} htmlFor={name}>
            {props.children}
          </label>
          <input
            placeholder={placeholder}
            className={styles.shadow}
            type={type}
            name={name}
          />
        </div>
      );
    default:
      return (
        <div className={styles.container}>
          <label className={styles.blue} htmlFor={name}>
            {props.children}
          </label>
          <input
            onChange={evt => handleResult(type, evt.target.value)}
            placeholder={placeholder}
            className={styles.shadow}
            type={type}
            name={name}
          />
        </div>
      );
  }
};
