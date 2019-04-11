import React, { Component } from "react";
import styles from "../Styles/ProfileContent.module.css";
import Input from "./Input";
import Button from "./Button";
import TitleContent from "./TitleContent";

class ProfileContent extends Component {
  render() {
    return (
      <div className={styles.profileContent}>
        <TitleContent>Meu perfil</TitleContent>
        <form className={styles.form}>
          <Input name="name" placeholder="Carmichael">
            Nome:{" "}
          </Input>
          <Input name="surname" placeholder="Ferreira">
            Sobrenome:{" "}
          </Input>
          <Input
            name="email"
            type="e-mail"
            placeholder="carmichaelferreira06@gmail.com"
          >
            E-mail:{" "}
          </Input>
          <Input name="password" type="password" placeholder="********">
            Senha:{" "}
          </Input>
          <Input name="university" placeholder="Anhembi Morumbi">
            Universidade:{" "}
          </Input>
          <div className={styles.btnGroup}>
            <Button>Atualizar</Button>
            <Button>Excluir Perfil</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProfileContent;
