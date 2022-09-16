import styled from "styled-components";
import { STFlexCont } from "./shared/STFlexCont";
import { STImg } from "./shared/STImg";
import { STPicture } from "./shared/STPicture";

export default function About() {
  return (
    <section id="about-section">
      <STFlexCont>
        <STPicture>
          <STImg src="/public/img/genaro-bonavita.jpg" alt="my profile photo" />
        </STPicture>

        <STFlexCont>
          <p>
            I am Genaro Bonavita, Frontend Developer. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Esse ipsum dolorum odit omnis iusto
            vel odio corrupti. Fugiat nihil praesentium, eum facilis vel quo
            deleniti impedit ex exercitationem eligendi aliquam?
          </p>
        </STFlexCont>
      </STFlexCont>
    </section>
  );
}
