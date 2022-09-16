import styled from "styled-components";

export const STFlexCont = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 1rem;

  border-radius: 5px;
  background-color: ${({ bgCol }) => bgCol || "initial"};

  @media screen and (min-width: 765px) {
    display: flex;
    flex-direction: ${({ flexDir }) => flexDir || "initial"};
    text-align: left;
    gap: 1rem;
  }
`;
