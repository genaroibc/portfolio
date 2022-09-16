import { useEffect } from "react";
import styled from "styled-components";

const COMMON_STYLES = `
  box-sizing: content-box;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 auto;

  border-right: 7px solid transparent;
  border-left: 7px solid transparent;

  line-height: 1;
`;

const STSubTitle = styled.h2`
  ${COMMON_STYLES}
  width: 22ch;

  animation: typingWord 2.5s steps(22), lineBlink 0.25s 10 step-end;
  animation-fill-mode: backwards;
  animation-delay: 3.5s;

  font-size: 6vw;

  color: #fff9;

  &::after,
  &::before {
    color: var(--secondary-color);
  }

  &::before {
    content: "<";
    padding-right: 0.2rem;
  }

  &::after {
    content: "/>";
    padding-left: 0.4rem;
  }

  @media screen and (min-width: 1400px) {
    font-size: 5rem;
  }
`;

const STTitle = styled.h1`
  ${COMMON_STYLES}
  max-width: 1400px;
  width: 15ch;

  border-right-width: 15px;
  border-left-width: 15px;

  margin-bottom: 0.8rem;

  font-size: 10vw;

  animation: typingWord 3.5s steps(15), lineBlink 0.23s 16 step-end;

  @media screen and (min-width: 1400px) {
    font-size: 8rem;
  }
`;

export default function Hero() {
  return (
    <section id="hero-section">
      <STTitle>Genaro Bonavita</STTitle>
      <STSubTitle>Frontend-Developer</STSubTitle>
    </section>
  );
}
