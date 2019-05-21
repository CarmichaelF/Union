import React, { Component } from "react";
import styles from "../Styles/LoginForm.module.css";
import Input from "./Input";
import Button from "./Button";
import { withRouter } from "react-router";

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
        break;
      default:
        this.setState({ login: value });
    }
  }

  handleClick(event) {
    event.preventDefault();
    this.isAuthenticated({
      login: this.state.login,
      password: this.state.password
    });
  }

  isAuthenticated(loginInfo) {
    // var myInit = {
    //   method: 'post',
    //   body: loginInfo
    // }

    // fetch('http://localhost/api/product/login.php', myInit)
    //   .then(response =>
    //     response === '' ?
    //       this.props.history.push("/")
    //       :
    //       response.type === 'student'
    //         ? this.props.history.push("/student/section")
    //         : this.props.history.push("/teacher/section"));
    loginInfo.type = 'student';
    loginInfo.type === 'student'
            ? this.props.history.push("/student/section")
            : this.props.history.push("/teacher/section")
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

        <div className={styles.btnGroup}>
          <Button
            type="button"
            onclick={event =>
              this.handleClick(event)
            }
          >
            Login
            </Button>
          <Button type="outline" to="/signup">
            Cadastre-se
          </Button>
        </div>
      </form>
    );
  }
}

export default withRouter(LoginForm);
