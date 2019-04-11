import React, { Component } from "react";
import TitleContent from "../Components/TitleContent";
import styles from "../Styles/QuestionsContent.module.css";
import Option from "../Components/Option";
import Button from "../Components/Button";

class Questions extends Component {
  render() {
    return (
      <div className={styles.questionsContent}>
        <TitleContent>
          Pergunta 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas leo justo, condimentum imperdiet ornare in, tempor nec quam.
          Maecenas quis luctus ipsum.
        </TitleContent>
        <div className={styles.optionContainer}>
          <Option>
            A - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas leo justo, condimentum imperdiet ornare in, tempor nec
            quam. Maecenas quis luctus ipsum.
          </Option>
          <Option>
            B - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas leo justo, condimentum imperdiet ornare in, tempor nec
            quam. Maecenas quis luctus ipsum.
          </Option>
          <Option>
            C - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas leo justo, condimentum imperdiet ornare in, tempor nec
            quam. Maecenas quis luctus ipsum.
          </Option>
          <Option>
            D - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas leo justo, condimentum imperdiet ornare in, tempor nec
            quam. Maecenas quis luctus ipsum.
          </Option>
        </div>
        <footer className={styles.questionsFooter}>
          <div className={styles.footerLeft}>
            <p>Dica: Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>Time: 1</p>
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
}

export default Questions;
