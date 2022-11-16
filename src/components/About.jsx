import styled from "styled-components";
import { STSectionTitle } from "./shared/STComponents";

const STAboutSection = styled.article`
  text-align: left;
  background-color: var(--terciary-color);
  padding: 1rem;

  img {
    margin: 1.5rem auto;
    display: block;
    float: none;
    width: 100%;
    max-width: 400px;
    border-radius: 30px;
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.5);
  }

  .text-bold {
    font-weight: bold;
  }

  .text-italic {
    font-style: italic;
  }

  @media screen and (min-width: 768px) {
    img {
      float: left;
      width: 300px;
      margin: 1.5rem;
    }
  }
`;

export default function About() {
  return (
    <section className="animated-section" id="about">
      <STSectionTitle>About me</STSectionTitle>
      <STAboutSection>
        <img src="/img/genaro-bonavita.webp" alt="my profile photo" />
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
          Currently, I work part-time at GoCode, where we are developing web
          sites for NGOs and foundations that help other people and don't have
          web presence. We are a team of students looking for their first tech
          job, and seeing that work experience is required in most jobs, we are
          building it, by working in team in real-life cases, and helping others
          along the way.
        </p>
        <p>
          Working as a team using SCRUM methodology, we acquire skills such as
          effective communication, team-coordination, meeting deadlines and
          customer services. Also, I'm continuously developing personal
          projects.
        </p>
      </STAboutSection>
    </section>
  );
}
