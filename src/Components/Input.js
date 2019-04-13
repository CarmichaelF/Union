import React from "react";
import styles from "../Styles/Input.module.css";

export default props => {
  const {
    color,
    type = "text",
    name,
    placeholder = "",
    handleResult = () => {}
  } = props;
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
    case "question":
      return (
        <input
          className={styles.question}
          placeholder={placeholder}
          type={type}
          name={name}
        />
      );
    case "answer":
      return (
        <input
          className={styles.answer}
          placeholder={placeholder}
          type={type}
          name={name}
        />
      );
    case "footText":
      return (
        <input
          className={styles.footText}
          placeholder={placeholder}
          type={type}
          name={name}
        />
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
