import { Icon } from "./shared/Icon";
import { STFlexCont, STSectionTitle, STSubTitle } from "./shared/STComponents";
import {
  interestedIn,
  learned,
  learning,
} from "../assets/techStackConfig.json";
import { v4 as uuid } from "uuid";

export default function Stack() {
  return (
    <section id="skills">
      <STSectionTitle>Skills</STSectionTitle>
      <h3>Stack of technologies:</h3>
      <STFlexCont jusCont="center">
        <article>
          <STSubTitle fontSize="1.6rem">I know:</STSubTitle>

          {learned.map(el => (
            <Icon key={uuid()} title={el} />
          ))}
        </article>
        <article>
          <STSubTitle fontSize="1.6rem">I'm learning:</STSubTitle>

          {learning.map(el => (
            <Icon key={uuid()} title={el} />
          ))}
        </article>
        <article>
          <STSubTitle fontSize="1.6rem">I'm interested in:</STSubTitle>

          {interestedIn.map(el => (
            <Icon key={uuid()} title={el} />
          ))}
        </article>
      </STFlexCont>
      <h3>Soft Skills:</h3>

      <STFlexCont jusCont="center">
        <article>
          <STSubTitle fontSize="1.6rem">I know:</STSubTitle>

          {learned.map(el => (
            <Icon key={uuid()} title={el} />
          ))}
        </article>
        <article>
          <STSubTitle fontSize="1.6rem">I'm learning:</STSubTitle>

          {learning.map(el => (
            <Icon key={uuid()} title={el} />
          ))}
        </article>
        <article>
          <STSubTitle fontSize="1.6rem">I'm interested in:</STSubTitle>

          {interestedIn.map(el => (
            <Icon key={uuid()} title={el} />
          ))}
        </article>
      </STFlexCont>
    </section>
  );
}
