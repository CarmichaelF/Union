import React, { Component } from "react";
import styles from "../../Styles/Section.module.css";
import Sidebar from "../../Components/Sidebar";
import Container from "../../Components/Container";
import SectionContent from "../../Components/SectionContent";
import TitleContent from "../../Components/TitleContent";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import QuestionsContent from "../../Components/QuestionsContent";

class TeacherConfig extends Component {
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
        const questions = {
          question: `Pergunta 1 - (Digite aqui a pergunta)`,
          answers: [
            `A - Primeira opção de resposta`,
            `B - Segunda opção de resposta`,
            `C - Terceira opção de resposta`,
            `D - Quarta opção de resposta`
          ],
          tip: `Dica: (Caso queira informe aqui uma dica relacionada à pergunta)`,
          team: `Não se esqueça de selecionar a resposta correta antes de continuar o seu deck.`
        };
        return <QuestionsContent type="teacher" questions={questions} />;
      default:
        return (
          <SectionContent type="evenly">
            <TitleContent>Qual o nome do seu deck?</TitleContent>
            <Input name="deckName" />
            <TitleContent>Quantas perguntas o deck irá ter?</TitleContent>
            <Input type="number" name="deckQuestionsNumber" />
            <Button type="button" onclick={() => this.handleClick("second")}>
              <i className="fas fa-check" />
            </Button>
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
      default:
        this.setState({
          content: ""
        });
    }
  }
}

export default TeacherConfig;
