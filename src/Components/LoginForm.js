import React, { Component } from "react";
import styles from "../Styles/LoginForm.module.css";
import Input from "./Input";
import Button from "./Button";

class LoginForm extends Component {
  render() {
    return (
      <form className={styles.form}>
        <div className={styles.inputs}>
          <Input type="email" name="email">
            E-mail:{" "}
          </Input>
          <Input name="password" type="password">
            Senha:{" "}
          </Input>
        </div>
        <a className={styles.forgotPassword} href="#">
          Esqueci a minha senha
        </a>

        <div className={styles.btnGroup}>
          <Button to="/section">Login</Button>
          <Button type="outline" to="/signup">
            Cadastre-se
          </Button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
