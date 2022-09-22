import styled, { css } from "styled-components";

export const STImg = styled.img`
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0px 5px 10px 5px #0005;

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 50%;
      aspect-ratio: 1/1;
      width: 80%;
    `};
`;
