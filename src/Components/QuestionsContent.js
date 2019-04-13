import React from "react";
import TitleContent from "../Components/TitleContent";
import styles from "../Styles/QuestionsContent.module.css";
import Option from "../Components/Option";
import Button from "../Components/Button";
import Input from "../Components/Input";

export default props => {
  const { questions = [], type } = props;
  const { question, answers, tip, team } = questions;
  switch (type) {
    case "teacher":
      return (
        <div className={styles.questionsContent}>
          <Input color="question" placeholder={question} />
          <div className={styles.optionContainer}>
            {answers.map(option => (
              <Input color="answer" placeholder={option} />
            ))}
          </div>
          <footer className={styles.questionsFooter}>
            <div className={styles.footerLeft}>
              <Input color="footText" placeholder={tip} />
              <Input color="footText" placeholder={`Time: ${team}`} />
            </div>
            <div>
              <Button type="button">
                <i className="fas fa-check" />
              </Button>
            </div>
          </footer>
        </div>
      );
    default:
      return (
        <div className={styles.questionsContent}>
          <TitleContent>{question}</TitleContent>
          <div className={styles.optionContainer}>
            {answers.map(option => (
              <Option>{option}</Option>
            ))}
          </div>
          <footer className={styles.questionsFooter}>
            <div className={styles.footerLeft}>
              <p>{tip}</p>
              <p>Time: {team}</p>
            </div>
            <div className={styles.footerLeft}>
              <Button type="button">
                <i className="fas fa-check" />
              </Button>
            </div>
          </footer>
        </div>
      );
  }
};
