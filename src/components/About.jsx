import {
  STSectionTitle,
  STPicture,
  STImg,
  STFlexCont,
} from "./shared/STComponents";

export default function About() {
  return (
    <section id="about">
      <STSectionTitle>About me</STSectionTitle>
      <STFlexCont>
        <STPicture>
          <STImg
            rounded
            src="/img/genaro-bonavita.jpg"
            alt="my profile photo"
          />
        </STPicture>

        <STFlexCont flexDir="column" padding="0">
          <p>
            I am Genaro Bonavita, Frontend Developer, mainly focused on the
            React ecosystem. I love building applications and products through
            clean and maintainable code.
          </p>

          <p>
            I've been interested in technology since i was a child, and, in
            2021, i finally started learning about this awesome world.
          </p>
        </STFlexCont>
      </STFlexCont>
    </section>
  );
}
