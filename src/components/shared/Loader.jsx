import styled from "styled-components";

const STLoaderContainer = styled.div`
  text-align: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 0.9;

  p {
    font-size: 2rem;
    margin: 0;
  }

  img {
    max-width: 200px;
    margin: auto;
  }
`;

export function Loader() {
  return (
    <STLoaderContainer>
      <p>LOADING</p>
      <img src="/svg/loader.svg" />
    </STLoaderContainer>
  );
}
