import React, { Component } from "react";
import styles from "../Styles/SectionContent.module.css";
import TitleContent from "../Components/TitleContent";
import Input from "../Components/Input";

class SectionContent extends Component {
  render() {
    return (
      <div className={styles.sectionContent}>
        <TitleContent>Insira o código da Sessão:</TitleContent>
        <Input></Input>
        <TitleContent type='subtitle'>(Caso não saiba pergunte ao seu professor)</TitleContent>
      </div>
    );
  }
}

export default SectionContent;
