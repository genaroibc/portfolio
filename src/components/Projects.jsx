import {
  STSectionTitle,
  STImg,
  STFlexCont,
  STPicture,
  STSubTitle,
} from "./shared/STComponents";
import { Icon } from "./shared/Icon";

import { useEffect } from "react";
import { v4 as uuid } from "uuid";

import styled from "styled-components";
import projectsConfig from "../assets/projectsConfig.json";
import { memo } from "react";

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

const STSlide = styled(STFlexCont)`
  display: none;

  &.${SLIDER_CLASS} {
    display: block;
  }

  @media screen and (min-width: 768px) {
    min-height: 550px;

    &.${SLIDER_CLASS} {
      display: flex;
    }
  }
`;

const STIconsCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 400px;
  margin: auto;
  gap: 1rem;

  @media screen and (min-width: 768px) {
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

    transition: transform 0.5s;
    opacity: 0.6;

    background-color: #000;
  }

  &:hover div {
    transform: translateY(0);
  }
`;

function Projects() {
  // useEffect(() => {
  //   document
  //     .getElementById(projectsConfig[0].id)
  //     .classList.add(`${SLIDER_CLASS}`);
  // }, []);

  const toggleSlideVisibility = id => {
    document
      .querySelectorAll(`.${SLIDER_CLASS}`)
      .forEach(el => el.classList.remove(`${SLIDER_CLASS}`));

    document.getElementById(id).classList.add(`${SLIDER_CLASS}`);
  };

  console.log({ projectsConfig });
  return (
    <section className="animated-section" id="projects">
      <STSectionTitle>My projects</STSectionTitle>
      <STSubTitle>Some projects i've worked in:</STSubTitle>
      <div style={{ position: "relative" }}>
        {projectsConfig.map(
          (
            {
              description,
              id,
              imgUrl,
              projectUrl = "#",
              repoUrl = "#",
              technologies = [],
              title,
            },
            index
          ) => (
            <STSlide
              key={uuid()}
              className={index === 0 ? SLIDER_CLASS : ""}
              id={id}
            >
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
                <STSubTitle fontWeight={600} margin="1rem" fonSize="2.5rem">
                  {title}
                </STSubTitle>
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
            <button
              aria-label="projects navigation bar"
              key={uuid()}
              onClick={() => toggleSlideVisibility(id)}
            >
              {index + 1}
            </button>
          ))}
        </StNav>
      </div>
    </section>
  );
}

export default memo(Projects);
