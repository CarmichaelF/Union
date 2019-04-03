import React from "react";
import styles from "../Styles/Title.module.css";
export default props => {
  const types = {
    TITLE: styles.title,
    PRIMARY: styles.titlePrimary,
    WHITE: styles.titleWhite
  };
  const { type, children } = props;
  switch (type) {
    case "primary":
      return <h1 className={`${types.TITLE} ${types.PRIMARY}`}>{children}</h1>;
    case "white":
      return <h1 className={`${types.TITLE} ${types.WHITE}`}>{children}</h1>;
    default:
      return <h1 className={`${types.TITLE} ${types.PRIMARY}`}>{children}</h1>;
  }
};
