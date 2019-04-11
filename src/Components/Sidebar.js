import React from "react";
import styles from "../Styles/Sidebar.module.css";
import Button from "./Button";

export default props => {
  const { type } = props;
  switch (type) {
    case "teacher":
      return (
        <aside className={`${styles.aside} ${styles.shadow}`}>
          <div className={styles.btnGroup}>
            <Button type="sidebar" to="/teacher/section">
              <i className="fas fa-plus" />
            </Button>
            <Button type="sidebar" to="/teacher/stats">
              <i className="fas fa-chart-line" />
            </Button>
            <Button type="sidebar" to="/teacher/profile">
              <i className="fas fa-user-circle" />
            </Button>
            <Button type="sidebar" to="/teacher/config">
              <i className="fas fa-cog" />
            </Button>
          </div>
          <div className={styles.logoffBtn}>
            <Button type="sidebar">
              <i className="fas fa-sign-out-alt" />
            </Button>
          </div>
        </aside>
      );
    default:
      return (
        <aside className={`${styles.aside} ${styles.shadow}`}>
          <div className={styles.btnGroup}>
            <Button type="sidebar" to="/student/section">
              <i className="fas fa-plus" />
            </Button>
            <Button type="sidebar" to="/student/stats">
              <i className="fas fa-chart-line" />
            </Button>
            <Button type="sidebar" to="/student/profile">
              <i className="fas fa-user-circle" />
            </Button>
          </div>
          <div className={styles.logoffBtn}>
            <Button type="sidebar">
              <i className="fas fa-sign-out-alt" />
            </Button>
          </div>
        </aside>
      );
  }
};
