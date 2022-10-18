import styled from "styled-components";
import { Icon } from "./shared/Icon";
import { STFlexCont, STSectionTitle } from "./shared/styled";
import {
  interestedIn,
  learned,
  learning,
} from "../assets/techStackConfig.json";
import { v4 as uuid } from "uuid";
import { DropDownMenu } from "./shared/DropDownMenu";

const STArticle = styled.article`
  text-align: center;
`;

export default function Stack() {
  return (
    <section>
      <STSectionTitle>Skills</STSectionTitle>
      <STFlexCont>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi
          nulla sapiente temporibus, eaque illo architecto velit numquam
          voluptatum accusantium nam, voluptatibus sint quisquam atque,
          similique hic recusandae laboriosam obcaecati!
        </p>
      </STFlexCont>

      {/* <DropDownMenu menuConfig={["more", "more", "more", "more", "more"]} />
      <br />
      <br />
      <br /> */}
      {/* <DropDownMenu menuConfig={["more", "more", "more", "more", "more"]} />
      <br />
      <br />
      <br /> */}
      {/* <DropDownMenu menuConfig={["more", "more", "more", "more", "more"]} />
      <br />
      <br />
      <br /> */}

      <STFlexCont jusCont="center">
        <STArticle>
          <h3>I know:</h3>

          {learned.map(el => (
            <Icon key={uuid()} title={el} />
          ))}
        </STArticle>
        <STArticle>
          <h3>I'm learning:</h3>

          {learning.map(el => (
            <Icon key={uuid()} title={el} />
          ))}
        </STArticle>
        <STArticle>
          <h3>I'm interested in:</h3>

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
