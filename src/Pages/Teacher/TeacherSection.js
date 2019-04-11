import React, { Component } from "react";
import styles from "../../Styles/TeacherSection.module.css";
import Sidebar from "../../Components/Sidebar";
import Container from "../../Components/Container";
import SectionContent from "../../Components/SectionContent";
import TitleContent from "../../Components/TitleContent";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Deck from "../../Components/Deck";

class TeacherSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  render() {
    return (
      <div className={styles.section}>
        <Sidebar type="teacher" />
        <Container>{this.switchContent()}</Container>
      </div>
    );
  }

  switchContent() {
    switch (this.state.content) {
      case "second":
        return (
          <SectionContent type="start">
            <TitleContent>
              Escolha 1 dos decks previamente criados{<br />} para prosseguir
              com a<br />
              criação da sessão:
            </TitleContent>
            <div className={styles.deckContainer}>
              <Deck type="add" />
              <Deck title="História" questionsNumber={25} date="22/04/2018" />
              <Deck title="Matemática" questionsNumber={31} date="02/01/2019" />
            </div>
          </SectionContent>
        );
      case "third":
        return (
          <SectionContent>
            <TitleContent>
              Aguarde enquanto conectamos{<br />}os jogadores
            </TitleContent>
            <div className={styles.dots}>
              <div className={`${styles.dot} ${styles.dotOne}`} />
              <div className={`${styles.dot} ${styles.dotTwo}`} />
              <div className={`${styles.dot} ${styles.dotThree}`} />
            </div>
            <Button to="/student/questions">Questions</Button>
          </SectionContent>
        );
      default:
        return (
          <SectionContent>
            <TitleContent>Insira o código da Sessão:</TitleContent>
            <Input>
              <Button type="button" onclick={() => this.handleClick("second")}>
                <i className="fas fa-fingerprint" />
              </Button>
            </Input>
            <TitleContent type="subtitle">
              (Este será o código utilizado para que os alunos entrem na sessão)
            </TitleContent>
          </SectionContent>
        );
    }
  }
  handleClick(state) {
    switch (state) {
      case "second":
        this.setState({
          content: "second"
        });
        break;
      case "third":
        this.setState({
          content: "third"
        });
        break;
      default:
        this.setState({
          content: ""
        });
    }
  }
}

export default TeacherSection;
