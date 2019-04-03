import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Button.module.css";

export default props => {
  const { type, children, to = "/" } = props;
  const types = {
    BTN: styles.btn,
    PRIMARY: styles.btnPrimary,
    OUTLINE: styles.btnOutline,
    TRANSPARENT: styles.btnTransparent,
    SIDEBAR: styles.btnSidebar,
    SIDEBARACTIVE: styles.sidebarActive
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
    default:
      return (
        <Link className={`${types.BTN} ${types.PRIMARY}`} to={to}>
          {children}
        </Link>
      );
  }
};
