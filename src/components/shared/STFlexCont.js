import styled from "styled-components";

export const STFlexCont = styled.div`
  width: 90%;
  margin: 1rem auto;
  padding: 1rem;

  border-radius: 5px;
  background-color: ${({ bgCol }) => bgCol || "initial"};

  @media screen and (min-width: 765px) {
    display: flex;
    flex-direction: ${({ flexDir }) => flexDir || "initial"};
  }
`;
