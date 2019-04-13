import React from "react";
import styles from "../../Styles/Stats.module.css";
import Sidebar from "../../Components/Sidebar";
import Container from "../../Components/Container";
import SectionContent from "../../Components/SectionContent";
import TitleContent from "../../Components/TitleContent";

export default () => {
  return (
    <div className={styles.stats}>
      <Sidebar type="teacher" />
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
};
