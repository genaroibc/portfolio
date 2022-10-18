import styled from "styled-components";
import { Icon } from "./shared/Icon";

const STFooter = styled.footer`
  background-color: var(--secondary-color);
  padding: 1rem 2rem 2rem;
  font-size: 1.5rem;
`;

const STLink = styled.a`
  font-size: 1.5rem;
  width: fit-content;
  margin: auto;
  gap: 1rem;

  svg {
    width: 1.5rem;
  }
`;

export default function Footer() {
  return (
    <STFooter>
      <p>
        Made by{" "}
        <a href="https://github.com/GenaroIBC" target="_blank">
          Genaro Bonavita
        </a>{" "}
        in 2022
      </p>
      <STLink href="https://github.com/GenaroIBC/portfolio" target="_blank">
        View repository <Icon title="github" />
      </STLink>
    </STFooter>
  );
}
