import React, { Component } from "react";
import styles from "../Styles/Section.module.css";
import Sidebar from "../Components/Sidebar";
import Container from "../Components/Container";
import SectionContent from "../Components/SectionContent";

class Section extends Component {
  render() {
    return (
      <div className={styles.section}>
        <Sidebar />
        <Container>
          <SectionContent />
        </Container>
      </div>
    );
  }
}

export default Section;
