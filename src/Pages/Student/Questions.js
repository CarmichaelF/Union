import React, { Component } from "react";
import styles from "../../Styles/Questions.module.css";
import Sidebar from "../../Components/Sidebar";
import Container from "../../Components/Container";
import QuestionsContent from "../../Components/QuestionsContent";

class Questions extends Component {
  render() {
    return (
      <div className={styles.questions}>
        <Sidebar />
        <Container>
          <QuestionsContent />
        </Container>
      </div>
    );
  }
}

export default Questions;
