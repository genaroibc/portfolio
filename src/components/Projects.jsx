import {
  STSectionTitle,
  STImg,
  STFlexCont,
  STPicture,
  STSubTitle
} from "./shared/STComponents";
import { Accordion } from "./shared/Accordion";
import { Icon } from "./shared/Icon";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import projectsList from "../assets/projectsList.json";

const SLIDER_CLASS = "slider-visible";

const StNav = styled.nav`
  display: flex;
  justify-content: center;

  margin: auto;
  margin-top: 1rem;
  gap: 0.6rem;

  flex-wrap: wrap;
  width: 100%;
  max-width: 500px;

  position: sticky;
  bottom: 2vh;

  background-color: var(--main-color);
  padding: 1rem 0;
  border-radius: 10px;

  button {
    font-size: 1.2rem;
    text-align: center;
  }
`;

const STSlide = styled(STFlexCont)`
  display: none;

  &.${SLIDER_CLASS} {
    display: block;
  }

  @media screen and (min-width: 768px) {
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
  margin: 2rem auto;
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

  max-width: 100%;

  div {
    position: absolute;

    text-align: center;

    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100%;

    transform: translateY(100%);

    transition: transform 0.5s;
    opacity: 0.6;

    background-color: #000;

    a {
      width: 18%;

      img {
        width: 100%;
        max-width: 60px;
      }
    }
  }

  &:hover div {
    transform: translateY(0);
  }
`;

function Projects() {
  const toggleSlideVisibility = id => {
    document
      .querySelectorAll(`.${SLIDER_CLASS}`)
      .forEach(el => el.classList.remove(`${SLIDER_CLASS}`));

    document.getElementById(id).classList.add(`${SLIDER_CLASS}`);
  };

  const { t } = useTranslation();

  return (
    <section className="animated-section" id="projects">
      <STSectionTitle>{t("PROJECTS_SECT.TITLE")}</STSectionTitle>
      <STSubTitle>{t("PROJECTS_SECT.SUBTITLE")}</STSubTitle>
      <div style={{ position: "relative" }}>
        {projectsList.map(
          (
            {
              id,
              imgUrl,
              projectUrl = "#",
              repoUrl = "#",
              technologies = [],
              title
            },
            index
          ) => {
            const TRANSL_PREFIX = `PROJECTS_SECT.PROJECTS_LIST.${title}`;
            return (
              <STSlide
                key={uuid()}
                className={index === 0 ? SLIDER_CLASS : ""}
                id={id}
              >
                <STSlidePicture>
                  <div>
                    <a target="_blank" href={repoUrl}>
                      <img src="/svg/sourcecode.svg" />
                    </a>
                    <a target="_blank" href={projectUrl}>
                      <img src="/svg/newtab.svg" />
                    </a>
                  </div>
                  <STImg src={imgUrl} alt="project preview" />
                </STSlidePicture>

                <STFlexCont gap="1rem" flexDir="column" margin={0}>
                  <STSubTitle
                    fontWeight={500}
                    margin="0.5rem auto"
                    fontSize="2.5rem"
                  >
                    {t(`${TRANSL_PREFIX}.TITLE`)}
                  </STSubTitle>

                  <Accordion
                    multiple={true}
                    data={[
                      {
                        content: t(`${TRANSL_PREFIX}.DESCRIPTION`),
                        title: t(`${TRANSL_PREFIX}.DESCRIPTION_TITLE`)
                      }
                    ]}
                  />

                  <STIconsCont smFlexDir="row">
                    {technologies.map(item => (
                      <STIcon key={uuid()}>
                        <Icon className="animated" title={item}></Icon>
                      </STIcon>
                    ))}
                  </STIconsCont>
                </STFlexCont>
              </STSlide>
            );
          }
        )}
        <StNav>
          {projectsList.map(({ id }, index) => (
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
