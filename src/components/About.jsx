import { STSectionTitle, STPicture, STImg, STFlexCont } from "./shared/styled";

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

        <STFlexCont>
          <p>
            I am Genaro Bonavita, Frontend Developer, mainly focused in the
            React ecosystem, with tools like Next.js, React Router, Redux,
            etc...
          </p>
        </STFlexCont>
      </STFlexCont>
    </section>
  );
}
