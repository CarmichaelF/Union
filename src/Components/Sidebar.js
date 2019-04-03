import React, { Component } from "react";
import styles from "../Styles/Sidebar.module.css";
import Button from "./Button";

class Sidebar extends Component {
  render() {
    return (
      <aside className={`${styles.aside} ${styles.shadow}`}>
        <div className={styles.btnGroup}>
          <Button type="sidebar" to="/section">
            <i className="fas fa-plus" />
          </Button>
          <Button type="sidebar" to="/stats">
            <i className="fas fa-chart-line" />
          </Button>
          <Button type="sidebar" to="/profile">
            <i class="fas fa-user-circle" />
          </Button>
          <Button type="sidebar" to="/config">
            <i class="fas fa-cog" />
          </Button>
        </div>
        <div className={styles.logoffBtn}>
          <Button type="sidebar">
            <i class="fas fa-sign-out-alt" />
          </Button>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
