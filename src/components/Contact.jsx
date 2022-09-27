import styled from "styled-components";
import { Icon } from "./shared/Icon";
import { STFlexCont, STSectionTitle } from "./shared/styled";

const STNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  margin: auto;
`;

const STHeader = styled.h3`
  font-size: 1.5rem;
`;

export default function Contact() {
  return (
    <section id="contact">
      <STSectionTitle>Contact</STSectionTitle>
      <STFlexCont alItems="center" flexDir="column">
        <div>
          <STHeader>You can find me at...</STHeader>
          <STNav>
            <a target="_blank" href="https://github.com/GenaroIBC">
              <Icon title="github" />
            </a>
            <a target="_blank" href="https://github.com/GenaroIBC">
              <Icon title="github" />
            </a>
          </STNav>
        </div>
        <div>
          <STHeader>...or also via e-mail</STHeader>
          <p>correo@gmail.com</p>
        </div>
      </STFlexCont>
    </section>
  );
}
