import { STFlexCont } from "./shared/STFlexCont";
import { STImg } from "./shared/STImg";
import { STPicture } from "./shared/STPicture";
import { STSectionTitle } from "./shared/styled";

export default function About() {
  return (
    <section id="about-section">
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
