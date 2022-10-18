import styled from "styled-components";
import { Icon } from "./shared/Icon";
import { STFlexCont, STSectionTitle } from "./shared/styled";
import {
  interestedIn,
  learned,
  learning,
} from "../assets/techStackConfig.json";
import { v4 as uuid } from "uuid";

const STArticle = styled.article`
  text-align: center;
`;

const STSubtitle = styled.h4`
  font-size: 1.6rem;
  text-align: center;
`;

export default function Stack() {
  return (
    <section>
      <STSectionTitle>Skills</STSectionTitle>
      <h3>Stack of technologies:</h3>
      <STFlexCont jusCont="center">
        <STArticle>
          <STSubtitle>I know:</STSubtitle>

          {learned.map(el => (
            <Icon key={uuid()} title={el} />
          ))}
        </STArticle>
        <STArticle>
          <STSubtitle>I'm learning:</STSubtitle>

          {learning.map(el => (
            <Icon key={uuid()} title={el} />
          ))}
        </STArticle>
        <STArticle>
          <STSubtitle>I'm interested in:</STSubtitle>

          {interestedIn.map(el => (
            <Icon key={uuid()} title={el} />
          ))}
        </STArticle>
      </STFlexCont>
      <h3>Soft Skills:</h3>

      <STFlexCont jusCont="center">
        <STArticle>
          <STSubtitle>I know:</STSubtitle>

          {learned.map(el => (
            <Icon key={uuid()} title={el} />
          ))}
        </STArticle>
        <STArticle>
          <STSubtitle>I'm learning:</STSubtitle>

          {learning.map(el => (
            <Icon key={uuid()} title={el} />
          ))}
        </STArticle>
        <STArticle>
          <STSubtitle>I'm interested in:</STSubtitle>

          {interestedIn.map(el => (
            <Icon key={uuid()} title={el} />
          ))}
        </STArticle>
        {/* <STArticle>
          <h3>I'm learning:</h3>
          <ul>
          Node Git & GitHub
          <li>Typescript</li>
            <li>Express</li>
            <li>Mongo DB</li>
          </ul>
        </STArticle> */}
      </STFlexCont>
    </section>
  );
}
