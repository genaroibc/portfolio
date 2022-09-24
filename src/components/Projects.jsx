import { STSectionTitle, STImg, STFlexCont, STPicture } from "./shared/styled";
import { Icon } from "./shared/Icon";

import { useEffect } from "react";
import { v4 as uuid } from "uuid";

import styled from "styled-components";
import projectsConfig from "../assets/projectsConfig.json";

const SLIDER_CLASS = "slider-visible";

const StNav = styled.nav`
  display: flex;
  justify-content: space-evenly;

  margin: auto;
  margin-top: 1rem;

  width: 100%;
  max-width: 300px;

  position: sticky;
  bottom: 2vh;

  background-color: var(--main-color);
  padding: 1rem 0;
  border-radius: 10px;

  button {
    font-size: 1.5rem;
    text-align: center;
    border-radius: 50%;
  }
`;

const STSubtitle = styled.h4`
  font-size: 2.5rem;
  margin: 1rem;
`;

const STSlide = styled(STFlexCont)`
  display: none;

  &.${SLIDER_CLASS} {
    display: block;
  }

  @media screen and (min-width: 765px) {
    &.${SLIDER_CLASS} {
      display: flex;
    }
  }
`;

const STIconsCont = styled.div`
  display: flex;
  justify-content: center;
  max-width: 400px;
  margin: auto;
  gap: 1rem;

  @media screen and (min-width: 765px) {
    margin: unset;
    align-self: flex-end;
  }
`;

const STIcon = styled.i`
  width: 40px;
  height: auto;

  text-align: center;

  border-radius: 50%;
`;

const STSlidePicture = styled(STPicture)`
  position: relative;
  overflow: hidden;

  div {
    position: absolute;

    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100%;

    transform: translateY(100%);

    transition: 0.5s;
    opacity: 0.6;

    background-color: #000;
  }

  &:hover div {
    transform: translateY(0);
  }
`;

export default function Projects() {
  useEffect(() => {
    document
      .getElementById(projectsConfig[0].id)
      .classList.add(`${SLIDER_CLASS}`);
  }, []);
  const toggleSlideVisibility = id => {
    document
      .querySelectorAll(`.${SLIDER_CLASS}`)
      .forEach(el => el.classList.remove(`${SLIDER_CLASS}`));

    document.getElementById(id).classList.add(`${SLIDER_CLASS}`);
  };

  return (
    <section id="projects">
      <STSectionTitle>My projects</STSectionTitle>
      <div style={{ position: "relative" }}>
        {projectsConfig.map(
          ({
            description,
            id,
            imgUrl,
            projectUrl = "#",
            repoUrl = "#",
            technologies = [],
            title,
          }) => (
            <STSlide key={uuid()} id={id}>
              <STSlidePicture>
                <div>
                  <a target="_blank" href={repoUrl}>
                    <Icon title="sourcecode" />
                  </a>
                  <a target="_blank" href={projectUrl}>
                    <Icon title="newtab" />
                  </a>
                </div>
                <STImg src={imgUrl} alt="img alternative" />
              </STSlidePicture>

              <STFlexCont flexDir="column">
                <STSubtitle>{title}</STSubtitle>
                <p>{description}</p>
                <STIconsCont smFlexDir="row">
                  {technologies.map(item => (
                    <STIcon key={uuid()}>
                      <Icon className="animated" title={item}></Icon>
                    </STIcon>
                  ))}
                </STIconsCont>
              </STFlexCont>
            </STSlide>
          )
        )}
        <StNav>
          {projectsConfig.map(({ id }, index) => (
            <button key={uuid()} onClick={() => toggleSlideVisibility(id)}>
              {index + 1}
            </button>
          ))}
        </StNav>
      </div>
    </section>
  );
}
