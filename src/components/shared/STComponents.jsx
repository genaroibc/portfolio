import styled, { css } from "styled-components";

export const STPicture = styled.picture`
  max-width: 500px;
  width: 100%;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  position: relative;
  line-height: normal;

  width: 100%;
  margin: 0.7em auto;
  overflow: hidden;
  text-align: center;
  font-weight: 300;
  color: #fff;

  &:before,
  &:after {
    content: "";
    display: inline-block;
    width: 50%;
    margin: 0 0.5em 0 -55%;
    vertical-align: middle;
    border-bottom: 1px solid;
  }

  &:after {
    margin: 0 -55% 0 0.5em;
  }

  span {
    display: inline-block;
    vertical-align: middle;
  }
`;

export const STSectionTitle = ({ children }) => (
  <SectionTitle>
    <span>{children}</span>
  </SectionTitle>
);

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

export const STFlexCont = styled.div`
  width: 100%;

  margin: 1rem auto 0;
  padding: ${({ padding }) => padding ?? "1rem"};

  display: flex;
  justify-content: space-evenly;
  flex-direction: ${({ smFlexDir }) => smFlexDir ?? "column"};

  border-radius: 5px;
  background-color: ${({ bgCol }) => bgCol ?? "var(--terciary-color)"};

  @media screen and (min-width: 992px) {
    flex-direction: ${({ flexDir }) => flexDir ?? "initial"};
    justify-content: ${({ jusCont }) => jusCont ?? "initial"};
    align-items: ${({ alItems }) => alItems ?? "initial"};
    text-align: left;
    gap: 2rem;
  }
`;

export const STSubTitle = styled.h4`
  padding: ${({ padding }) => padding ?? "initial"};
  margin: ${({ margin }) => margin ?? "initial"};

  font-size: ${({ fontSize }) => fontSize ?? "2rem"};
  text-align: ${({ textAlign }) => textAlign ?? "center"};
`;
