import React from "react";
import styles from "../../Styles/Profile.module.css";
import Sidebar from "../../Components/Sidebar";
import Container from "../../Components/Container";
import Input from "../../Components/Input";
import ProfileContent from "../../Components/ProfileContent";

export default () => {
  return (
    <div className={styles.profile}>
      <Sidebar />
      <Container>
        <ProfileContent>
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
        </ProfileContent>
      </Container>
    </div>
  );
};
