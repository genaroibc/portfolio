import styled from "styled-components";
import { Icon } from "./shared/Icon";
import { STFlexCont, STSectionTitle, STSubTitle } from "./shared/STComponents";

const STNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  margin: auto;

  a {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const STHeader = styled.h3`
  font-size: 1.5rem;
`;

const STPgph = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

export default function Contact() {
  return (
    <section id="contact">
      <STSectionTitle>Contact Me</STSectionTitle>
      <STSubTitle fontSize="1.8rem">Let's build something amazing!</STSubTitle>
      <STFlexCont alItems="center" flexDir="column">
        <div>
          <STHeader>You can find me at...</STHeader>
          <STNav>
            <a target="_blank" href="https://github.com/GenaroIBC">
              <Icon title="github" />
              GitHub
            </a>
            <a target="_blank" href="https://github.com/GenaroIBC">
              <Icon title="github" />
              LinkedIn
            </a>
          </STNav>
        </div>
        <div>
          <STHeader>...or also contact me via e-mail:</STHeader>
          <STPgph>
            <a href="mailto:correo@gmail.com">correo@gmail.com</a>
          </STPgph>
        </div>
      </STFlexCont>
    </section>
  );
}
