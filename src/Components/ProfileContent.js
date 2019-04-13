import React from "react";
import styles from "../Styles/ProfileContent.module.css";
import Button from "./Button";
import TitleContent from "./TitleContent";

export default props => {
  const { children } = props;
  return (
    <div className={styles.profileContent}>
      <TitleContent>Meu perfil</TitleContent>
      <form className={styles.form}>
        {children}
        <div className={styles.btnGroup}>
          <Button>Atualizar</Button>
          <Button>Excluir Perfil</Button>
        </div>
      </form>
    </div>
  );
};
