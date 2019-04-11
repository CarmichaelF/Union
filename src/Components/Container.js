import React, { Component } from "react";
import styles from "../Styles/Container.module.css";
import Title from "../Components/Title";

class Container extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Title>Union</Title>
        {this.props.children}
      </div>
    );
  }
}

export default Container;