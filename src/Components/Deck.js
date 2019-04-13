import React from "react";
import Button from "../Components/Button";
import styles from "../Styles/Deck.module.css";

export default props => {
  const { type, title, questionsNumber, date } = props;
  switch (type) {
    case "add":
      return (
        <div className={styles.deck}>
          <Button to="/teacher/config" type="transparent">
            {" "}
            <i className={`fas fa-plus ${styles.plusIcon}`} />
          </Button>
        </div>
      );
    default:
      return (
        <div className={styles.deck}>
          <Button to="/teacher/teams" type="transparent">
            <h1 className={styles.deckTitle}>{title}</h1>
          </Button>
          <h2 className={styles.deckSubtitle}>
            Número de perguntas:{" "}
            <span className={styles.deckSubtitleContent}>
              {questionsNumber}
            </span>
          </h2>

          <h2 className={styles.deckSubtitle}>
            Criado em:{" "}
            <span className={styles.deckSubtitleContent}>{date}</span>
          </h2>
        </div>
      );
  }
};
