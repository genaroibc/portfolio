import styled from "styled-components";
import { STSectionTitle } from "./shared/STComponents";

const STAboutSection = styled.article`
  text-align: left;
  background-color: var(--terciary-color);
  padding: 1rem;

  img.profile-photo {
    margin: 1.5rem auto;
    display: block;
    float: none;
    width: 100%;
    max-width: 400px;
    border-radius: 30px;
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

  .text-italic {
    font-style: italic;
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
  return (
    <section className="animated-section" id="about">
      <STSectionTitle>About me</STSectionTitle>
      <STAboutSection>
        <img
          className="profile-photo"
          src="/img/genaro-bonavita.webp"
          alt="my profile photo"
        />
        <p>
          I am <span className="text-bold">Genaro Bonavita</span>,{" "}
          <span className="text-bold">Frontend Developer</span>, mainly focused
          on the <span className="text-italic">React</span> ecosystem. I love
          building applications and products through
          <span className="text-bold"> clean </span>
          and
          <span className="text-bold"> maintainable </span>
          code.
        </p>
        <p>
          Currently, I work part-time at{" "}
          <a href="https://www.gocode.ar/" target="_blank">
            GoCode
            <img
              className="new-tab-icon"
              src="/svg/newtab.svg"
              alt="new tab icon"
            />
          </a>
          , where we are developing web sites for NGOs and foundations that help
          other people and don't have web presence.
        </p>
      </STAboutSection>
    </section>
  );
}
