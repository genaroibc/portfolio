import styled from "styled-components";
import {
  STSectionTitle,
  STPicture,
  STImg,
  STFlexCont,
} from "./shared/STComponents";

const STPgph = styled.p`
  font-size: 1.8rem;
`;

export default function About() {
  return (
    <section id="about">
      <STSectionTitle>About me</STSectionTitle>
      <STFlexCont>
        <STPicture>
          <STImg
            rounded
            src="/img/genaro-bonavita.webp"
            alt="my profile photo"
          />
        </STPicture>

        <STFlexCont flexDir="column" padding="0">
          <STPgph>
            I am Genaro Bonavita, Frontend Developer, mainly focused on the
            React ecosystem. I love building applications and products through
            clean and maintainable code.
          </STPgph>
        </STFlexCont>
      </STFlexCont>
    </section>
  );
}
