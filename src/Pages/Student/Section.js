import React, { Component } from "react";
import styles from "../../Styles/Section.module.css";
import Sidebar from "../../Components/Sidebar";
import Container from "../../Components/Container";
import SectionContent from "../../Components/SectionContent";
import TitleContent from "../../Components/TitleContent";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import QuestionsContent from "../../Components/QuestionsContent";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  render() {
    return (
      <div className={styles.section}>
        <Sidebar />
        <Container>{this.switchContent()}</Container>
      </div>
    );
  }

  switchContent() {
    switch (this.state.content) {
      case "second":
        return (
          <SectionContent>
            <TitleContent>
              Assim que se sentir preparado para jogar{<br />} confirme aqui em
              baixo (ou não):
            </TitleContent>
            <div className={styles.btnGroup}>
              <Button
                type="buttonGreen"
                onclick={() => this.handleClick("third")}
              >
                <i className="fas fa-check" />
              </Button>
              <Button type="buttonRed" onclick={() => this.handleClick()}>
                <i className="fas fa-times" />
              </Button>
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
            <Button type="button" onclick={() => this.handleClick("fourth")}>
              Questions
            </Button>
          </SectionContent>
        );
      case "fourth":
        const questions = {
          question: `Pergunta 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Maecenas leo justo, condimentum imperdiet ornare in, tempor nec quam.
        Maecenas quis luctus ipsum.`,
          answers: [
            `A - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          leo justo, condimentum imperdiet ornare in, tempor nec quam. Maecenas
          quis luctus ipsum.`,
            `B - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          leo justo, condimentum imperdiet ornare in, tempor nec quam. Maecenas
          quis luctus ipsum.`,
            `C - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          leo justo, condimentum imperdiet ornare in, tempor nec quam. Maecenas
          quis luctus ipsum.`,
            `D - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          leo justo, condimentum imperdiet ornare in, tempor nec quam. Maecenas
          quis luctus ipsum.`
          ],
          tip: `Dica: Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
          team: 1
        };
        return <QuestionsContent questions={questions} />;
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
              (Caso não saiba pergunte ao seu professor)
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
      case "fourth":
        this.setState({
          content: "fourth"
        });
        break;
      default:
        this.setState({
          content: ""
        });
    }
  }
}

export default Section;
