import React, { Component } from "react";
import styles from "../Styles/LoginForm.module.css";
import Input from "./Input";
import Button from "./Button";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }

  handleResult(type, value) {
    switch (type) {
      case "password":
        this.setState({ password: value });
        console.log(this.state);
        break;
      default:
        this.setState({ login: value });
        console.log(this.state);
    }
  }

  render() {
    return (
      <form className={styles.form}>
        <div className={styles.inputs}>
          <Input
            handleResult={this.handleResult.bind(this)}
            type="email"
            name="email"
          >
            E-mail:{" "}
          </Input>
          <Input
            handleResult={this.handleResult.bind(this)}
            name="password"
            type="password"
          >
            Senha:{" "}
          </Input>
        </div>
        <a className={styles.forgotPassword} href="#">
          Esqueci a minha senha
        </a>

        <div className={styles.btnGroup}>
          {this.state.login === "s" ? (
            <Button to="/student/section">Login</Button>
          ) : (
            <Button to="/teacher/section">Login</Button>
          )}
          <Button type="outline" to="/signup">
            Cadastre-se
          </Button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
