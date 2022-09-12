import styled from "styled-components";
import { STFlexCont } from "./shared/STFlexCont";

const STCarrousel = styled.div`
  margin: 1rem auto;
  background-color: var(--secondary-color);
`;

const STDescription = styled.div`
  margin: 1rem auto;

  background-color: var(--terciary-color);

  @media screen and (min-width: 765px) {
    width: 30%;
    & ~ * {
      width: 70%;
    }
  }
`;

// const STGrid = styled.div`
//   width: 90%;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 1rem;
//   padding: 1rem;
//   margin: auto;

//   background-color: var(--main-color);
// `;

// const STGridItem = styled.article`
//   background-color: var(--terciary-color);

//   img {
//     width: 80%;
//   }
// `;

export default function Projects() {
  return (
    <section>
      <h2>My projects</h2>
      <h3>Projects i've worked in:</h3>
      <STFlexCont bgCol="var(--main-color)">
        <STDescription>
          eaefadaef Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Vero accusantium eaque sunt quam! Nihil, iusto explicabo voluptatum
          voluptates, libero reiciendis quaerat repudiandae sit autem, deleniti
          mollitia commodi officia ipsum. Laudantium!
        </STDescription>
        <STCarrousel>d</STCarrousel>
      </STFlexCont>
      {/* <STGrid>
        <STGridItem>
          <img src="vite.svg" alt="" />
          <h4>Tic tac toe</h4>
        </STGridItem>
        <STGridItem>
          <img src="vite.svg" alt="" />
          <h4>Tic tac toe</h4>
        </STGridItem>
        <STGridItem>
          <img src="vite.svg" alt="" />
          <h4>Tic tac toe</h4>
        </STGridItem>
      </STGrid> */}
    </section>
  );
}
