import styled from "styled-components";
import { Icon } from "./shared/Icon";
import { STFlexCont, STSectionTitle } from "./shared/styled";
import {
  interestedIn,
  learned,
  learning,
} from "../assets/techStackConfig.json";

const STArticle = styled.article`
  text-align: center;
`;

export default function Stack() {
  return (
    <section>
      <STSectionTitle>Stack</STSectionTitle>
      <STFlexCont flexDir="column">
        <STArticle>
          <h3>I know:</h3>

          {learned.map(el => (
            <Icon title={el} />
          ))}
        </STArticle>
        <STArticle>
          <h3>I'm learning:</h3>

          {learning.map(el => (
            <Icon title={el} />
          ))}
        </STArticle>
        <STArticle>
          <h3>I'm interested in:</h3>

          {interestedIn.map(el => (
            <Icon title={el} />
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
