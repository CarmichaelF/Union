import React, { Component } from "react";
import styles from "../Styles/LoginForm.module.css";

class LoginForm extends Component {
  render() {
    return (
      <form className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.email}>
            <label htmlFor="email">E-mail: </label>
            <input className={styles.shadow} type="text" name="email" />
          </div>
          <div className={styles.password}>
            <label htmlFor="password">Senha: </label>
            <input className={styles.shadow} type="password" name="password" />
          </div>
        </div>
        <a className={styles.forgotPassword} href="#">
          Esqueci a minha senha
        </a>

        <div className={styles.btnGroup}>
          <button className={`${styles.btn} ${styles.btnLogin}`}>Login</button>
          <button className={`${styles.btn} ${styles.btnSignUp}`}>
            Cadastre-se
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
