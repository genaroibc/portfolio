import styled from "styled-components";

export const STFlexCont = styled.div`
  width: 100%;

  margin: 1rem auto 0;
  padding: 1rem;

  display: flex;
  justify-content: space-evenly;
  flex-direction: ${({ smFlexDir }) => smFlexDir || "column"};

  border-radius: 5px;
  background-color: ${({ bgCol }) => bgCol || "var(--terciary-color)"};

  @media screen and (min-width: 992px) {
    flex-direction: ${({ flexDir }) => flexDir || "initial"};
    text-align: left;
    gap: 2rem;
  }
`;
