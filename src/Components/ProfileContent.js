import React from "react";
import styles from "../Styles/ProfileContent.module.css";
import Button from "./Button";
import TitleContent from "./TitleContent";

export default () => {
  return (
    <div className={styles.profileContent}>
      <TitleContent>Meu perfil</TitleContent>
      <form className={styles.form}>
        {this.props.children}
        <div className={styles.btnGroup}>
          <Button>Atualizar</Button>
          <Button>Excluir Perfil</Button>
        </div>
      </form>
    </div>
  );
};
