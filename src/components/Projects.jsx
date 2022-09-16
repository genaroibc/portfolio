import { useEffect } from "react";
import styled from "styled-components";
import { STFlexCont } from "./shared/STFlexCont";
import { STImg } from "./shared/STImg";
import { STPicture } from "./shared/STPicture";

const SLIDER_CLASS = "slider-visible";

const slidesConfig = [
  {
    id: "proj-1",
    imgUrl: "https://placeimg.com/600/600/nature",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequatur minus in reprehenderit, fugiat expedita reiciendis saepe, consectetur consequuntur libero ipsum repellat ab laboriosam autem animi beatae dicta, nulla voluptatum?",
  },
  {
    id: "proj-2",
    imgUrl: "/img/tictactoe.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequatur minus in reprehenderit, fugiat expedita reiciendis saepe, consectetur consequuntur libero ipsum repellat ab laboriosam autem animi beatae dicta, nulla voluptatum?",
  },
  {
    id: "proj-3",
    imgUrl: "https://placeimg.com/600/600/arch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequatur minus in reprehenderit, fugiat expedita reiciendis saepe, consectetur consequuntur libero ipsum repellat ab laboriosam autem animi beatae dicta, nulla voluptatum?",
  },
];

const StNav = styled.nav`
  width: 100%;
  max-width: 300px;
  background-color: var(--terciary-color);
  display: flex;
  justify-content: space-evenly;
  margin: auto;

  button {
    font-size: 1rem;
    text-align: center;
    border-radius: 50%;
  }
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

export default function Projects() {
  useEffect(() => {
    document
      .getElementById(slidesConfig[0].id)
      .classList.add(`${SLIDER_CLASS}`);
  }, []);

  const toggleSlideVisibility = id => {
    document
      .querySelectorAll(`.${SLIDER_CLASS}`)
      .forEach(el => el.classList.remove(`${SLIDER_CLASS}`));

    document.getElementById(id).classList.add(`${SLIDER_CLASS}`);
  };

  return (
    <section id="projects-section">
      <h2>My projects</h2>
      <h3>Projects i've worked in:</h3>

      {slidesConfig.map(({ id, imgUrl, description }) => (
        <STSlide id={id}>
          <STPicture>
            <STImg src={imgUrl} alt="" />
          </STPicture>

          <STFlexCont>
            <p>{description}</p>
          </STFlexCont>
        </STSlide>
      ))}
      <StNav>
        {slidesConfig.map(({ id }) => (
          <button onClick={() => toggleSlideVisibility(id)}> &bull;</button>
        ))}
      </StNav>
    </section>
  );
}
