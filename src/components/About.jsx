import styled from "styled-components";
import { STSectionTitle } from "./shared/STComponents";
import { useTranslation } from "react-i18next";

const STAboutSection = styled.article`
  text-align: left;
  background-color: var(--terciary-color);
  padding: 1rem;

  img.profile-photo {
    margin: 1.5rem auto;
    display: block;
    float: none;
    width: 100%;
    max-width: 350px;
    border-radius: 50%;
    image-rendering: pixelated;
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.5);
  }

  a {
    font-weight: bold;
  }

  img.new-tab-icon {
    width: 20px;
    margin: 0 5px;
    bottom: 0;
    transform: translateY(5px);
  }

  .text-bold {
    font-weight: bold;
  }

  @media screen and (min-width: 768px) {
    img.profile-photo {
      float: left;
      width: 300px;
      margin: 1.5rem;
    }

    a {
      position: relative;

      img.new-tab-icon {
        transition: transform 0.6s;
        position: relative;
        transform: rotateZ(-35deg) translateY(5px);
        width: 30px;
      }

      &:hover {
        img.new-tab-icon {
          opacity: 1;
          transform: rotateZ(0deg) translateY(5px);
        }
      }
    }
  }
`;

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="animated-section" id="about">
      <STSectionTitle>{t("ABOUT_SECT.TITLE")}</STSectionTitle>
      <STAboutSection>
        <img
          className="profile-photo"
          src="/img/genaro-bonavita.webp"
          alt="genaro bonavita profile photo"
        />
        <p>
          {t("ABOUT_SECT.PGPH_1")}{" "}
          <span className="text-bold">Genaro Bonavita</span>,{" "}
          <span className="text-bold">Frontend Developer</span>,{" "}
          {t("ABOUT_SECT.PGPH_2")}
        </p>
        <p>
          {t("ABOUT_SECT.PGPH_3")}{" "}
          <a href="https://www.gocode.ar/" target="_blank">
            {t("ABOUT_SECT.PGPH_4")}
            <img
              className="new-tab-icon"
              src="/svg/newtab.svg"
              alt="new tab icon"
            />
          </a>
          {t("ABOUT_SECT.PGPH_5")}
        </p>
      </STAboutSection>
    </section>
  );
}
