import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Button.module.css";

export default props => {
  const { type, children, to = "/", onclick } = props;
  const types = {
    BTN: styles.btn,
    PRIMARY: styles.btnPrimary,
    OUTLINE: styles.btnOutline,
    TRANSPARENT: styles.btnTransparent,
    SIDEBAR: styles.btnSidebar,
    SIDEBARACTIVE: styles.sidebarActive,
    GREEN: styles.btnGreen,
    RED: styles.btnRed
  };
  switch (type) {
    case "primary":
      return (
        <Link className={`${types.BTN} ${types.PRIMARY}`} to={to}>
          {children}
        </Link>
      );
    case "outline":
      return (
        <Link className={`${types.BTN} ${types.OUTLINE}`} to={to}>
          {children}
        </Link>
      );
    case "transparent":
      return (
        <Link className={`${types.BTN} ${types.TRANSPARENT}`} to={to}>
          {children}
        </Link>
      );
    case "buttonGreen":
      return (
        <button
          onClick={onclick}
          className={`${types.BTN} ${types.GREEN}`}
          to={to}
        >
          {children}
        </button>
      );
    case "buttonRed":
      return (
        <button
          onClick={onclick}
          className={`${types.BTN} ${types.RED}`}
          to={to}
        >
          {children}
        </button>
      );
    case "sidebar":
      return (
        <Link className={`${types.BTN} ${types.SIDEBAR}`} to={to}>
          {children}
        </Link>
      );
    case "sidebarActive":
      return (
        <Link className={`${types.BTN} ${types.SIDEBARACTIVE}`} to={to}>
          {children}
        </Link>
      );
    case "button":
      return (
        <button
          onClick={onclick}
          className={`${types.BTN} ${types.PRIMARY}`}
          to={to}
        >
          {children}
        </button>
      );
    default:
      return (
        <Link className={`${types.BTN} ${types.PRIMARY}`} to={to}>
          {children}
        </Link>
      );
  }
};
