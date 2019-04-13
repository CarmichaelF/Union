import React from "react";
import styles from "../Styles/SignUpForm.module.css";
import Input from "../Components/Input";
import Button from "../Components/Button";
import RadioButton from "../Components/RadioButton";

export default () => {
  return (
    <div className={styles.signUpForm}>
      <Input color="white" name="name">
        Nome:{" "}
      </Input>
      <Input color="white" name="surname">
        Sobrenome:{" "}
      </Input>
      <Input color="white" type="email" name="email">
        E-mail:{" "}
      </Input>
      <Input color="white" type="password" name="password">
        Senha:{" "}
      </Input>
      <div className={styles.radioButtonGroup}>
        <RadioButton name="student">Estudante</RadioButton>
        <RadioButton name="student">Professor</RadioButton>
      </div>
      <Button to="/student/section">Cadastrar</Button>
    </div>
  );
};
