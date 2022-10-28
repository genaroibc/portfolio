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

  font-size: 1.3rem;

  padding: 1rem;
  margin: 0.3rem;

  background-color: var(--secondary-color);
  border-radius: 10px;
`;

const HARD_SKILLS_DATA = [
  {
    title: "🧠 I know",
    description: (
      <ul>
        {learned.map(el => (
          <STIconListItem key={uuid()}>
            <Icon title={el} />
            {el.toUpperCase()}
          </STIconListItem>
        ))}
      </ul>
    ),
  },
  {
    title: "🌱  I'm learning",
    description: (
      <ul>
        {learning.map(el => (
          <STIconListItem key={uuid()}>
            <Icon title={el} />
            {el.toUpperCase()}
          </STIconListItem>
        ))}
      </ul>
    ),
  },
  {
    title: "🔎 I'm interested in",
    description: (
      <ul>
        {interestedIn.map(el => (
          <STIconListItem key={uuid()}>
            <Icon title={el} />
            {el.toUpperCase()}
          </STIconListItem>
        ))}
      </ul>
    ),
  },
];

export default function Stack() {
  return (
    <section className="animated-section" id="skills">
      <STSectionTitle>Skills</STSectionTitle>
      <STSubTitle>Stack of technologies:</STSubTitle>

      <Accordion
        style={{ backgroundColor: "var(--terciary-color)", color: "#fff" }}
        multiple={true}
        data={HARD_SKILLS_DATA}
      />

      <STSubTitle>Soft Skills:</STSubTitle>

      <Accordion data={SOFT_SKILLS_DATA} />
    </section>
  );
}
