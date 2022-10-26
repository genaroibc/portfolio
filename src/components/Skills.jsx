import { Icon } from "./shared/Icon";
import { STFlexCont, STSectionTitle, STSubTitle } from "./shared/STComponents";
import {
  interestedIn,
  learned,
  learning,
} from "../assets/techStackConfig.json";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import { Accordion } from "./shared/Accordion";
import SOFT_SKILLS_DATA from "../assets/softSkills.json";

const STIconListItem = styled.li`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
  margin: 0.3rem;

  background-color: var(--secondary-color);
`;

const STTechsList = styled.ul`
  text-align: center;

  @media screen and (min-width: 992px) {
    width: 70%;
    margin: auto;
  }
`;

export default function Stack() {
  return (
    <section id="skills">
      <STSectionTitle>Skills</STSectionTitle>
      <STSubTitle>Stack of technologies:</STSubTitle>
      <STFlexCont flexDir="column" jusCont="center">
        <article>
          <STSubTitle fontSize="1.6rem">I know:</STSubTitle>
          <STTechsList>
            {learned.map(el => (
              <STIconListItem key={uuid()}>
                <Icon title={el} />
                {el.toUpperCase()}
              </STIconListItem>
            ))}
          </STTechsList>
        </article>

        <article>
          <STSubTitle fontSize="1.6rem">I'm learning:</STSubTitle>

          <STTechsList>
            {learning.map(el => (
              <STIconListItem key={uuid()}>
                <Icon title={el} /> {el.toUpperCase()}
              </STIconListItem>
            ))}
          </STTechsList>
        </article>

        <article>
          <STSubTitle fontSize="1.6rem">I'm interested in:</STSubTitle>

          <STTechsList>
            {interestedIn.map(el => (
              <STIconListItem key={uuid()}>
                <Icon title={el} />

                {el.toUpperCase()}
              </STIconListItem>
            ))}
          </STTechsList>
        </article>
      </STFlexCont>

      <STSubTitle>Soft Skills:</STSubTitle>

      <STFlexCont jusCont="center">
        <article>
          <Accordion data={SOFT_SKILLS_DATA} />
        </article>
      </STFlexCont>
    </section>
  );
}
