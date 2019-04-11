import React, { Component } from "react";
import styles from "../../Styles/Stats.module.css";
import Sidebar from "../../Components/Sidebar";
import Container from "../../Components/Container";
import SectionContent from "../../Components/SectionContent";
import TitleContent from "../../Components/TitleContent";

class Stats extends Component {
  render() {
    return (
      <div className={styles.stats}>
        <Sidebar />
        <Container>
          <SectionContent>
            <TitleContent>Estatísticas:</TitleContent>
            <div className={styles.statsSubtitle}>
              <TitleContent type="subtitle">
                Você ainda não participou de nenhuma atividade, assim que ganhar
                alguns jogos a sua pontuação aparecerá aqui.
              </TitleContent>
            </div>
          </SectionContent>
        </Container>
      </div>
    );
  }
}

export default Stats;
