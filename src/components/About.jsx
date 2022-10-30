import styled from "styled-components";
import {
  STSectionTitle,
  STPicture,
  STImg,
  STFlexCont,
} from "./shared/STComponents";

const STPgph = styled.p`
  font-size: 1.8rem;

  .text-bold {
    font-weight: bold;
  }

  .text-italic {
    font-style: italic;
  }
`;

export default function About() {
  return (
    <section className="animated-section" id="about">
      <STSectionTitle>About me</STSectionTitle>
      <STFlexCont>
        <STPicture>
          <STImg
            rounded
            src="/img/genaro-bonavita.webp"
            alt="my profile photo"
          />
        </STPicture>

        <STFlexCont
          jusCont="center"
          alItems="center"
          flexDir="column"
          padding="0"
          margin="0"
        >
          <STPgph>
            I am <span className="text-bold">Genaro Bonavita</span>,{" "}
            <span className="text-bold">Frontend Developer</span>, mainly
            focused on the <span className="text-italic">React</span> ecosystem.
            I love building applications and products through
            <span className="text-bold"> clean </span>
            and
            <span className="text-bold"> maintainable </span>
            code.
          </STPgph>
        </STFlexCont>
      </STFlexCont>
    </section>
  );
}
