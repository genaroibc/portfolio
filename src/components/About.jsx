import styled from "styled-components";

const STImg = styled.img`
  width: 80%;
`;

const STContFlex = styled.div`
  width: 90%;
  margin: auto;
  padding: 1rem;

  border-radius: 5px;
  background-color: ${({ bgCol }) => bgCol || "initial"};

  @media screen and (min-width: 765px) {
    display: flex;
    flex-direction: ${({ flexDir }) => flexDir || "initial"};
  }
`;

const STPicture = styled.picture`
  max-width: 550px;
  width: 90%;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
`;

export default function About() {
  return (
    <section>
      <STContFlex bgCol="var(--main-color)">
        <STPicture>
          <STImg src="/vite.svg" alt="my profile photo" />
        </STPicture>
        <STContFlex bgCol="var(--secondary-color)" flexDir="column">
          <h2>About me:</h2>
          <p>
            I am a Frontend Developer, Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Esse ipsum dolorum odit omnis iusto vel odio
            corrupti. Fugiat nihil praesentium, eum facilis vel quo deleniti
            impedit ex exercitationem eligendi aliquam?
          </p>
        </STContFlex>
      </STContFlex>
    </section>
  );
}
