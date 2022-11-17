import styled from "styled-components";

const STFooter = styled.footer`
  background-color: var(--secondary-color);
  padding: 1rem 2rem 2rem;
  font-size: 1.5rem;
  border-top: 10px solid var(--complement-color);
`;

const STLink = styled.a`
  font-size: 1.5rem;

  width: fit-content;
  margin: auto;
  gap: 1rem;
`;

export default function Footer() {
  return (
    <STFooter>
      <p>
        Developed by{" "}
        <a href="https://github.com/GenaroIBC" target="_blank">
          Genaro Bonavita
        </a>{" "}
        in 2022
      </p>
      <STLink href="https://github.com/GenaroIBC/portfolio" target="_blank">
        View repository{" "}
        <img width="30" src="/svg/github.svg" alt="github icon" />
      </STLink>
    </STFooter>
  );
}
