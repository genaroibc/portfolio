import styled from "styled-components";

const STHeader = styled.header`
  position: fixed;
  top: 0;

  width: 100%;
  min-height: 80px;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--main-color);

  label:has(input:checked) ~ nav {
    top: 0;
  }

  @media screen and (min-width: 765px) {
    label:has(input:checked) ~ nav {
      top: unset;
    }

    label {
      display: none;
    }

    nav {
      position: unset;

      max-width: 1000px;
      width: 80%;
      height: auto;
      margin: auto;

      flex-direction: row;
      justify-content: space-around;

      background-color: inherit;

      a {
        display: block;
      }
    }
  }
`;

const STNav = styled.nav`
  position: absolute;
  left: 0;
  top: -100vh;
  z-index: 900;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  transition: top 0.3s ease;

  background-color: var(--secondary-color);
`;

const STHamburgerLabel = styled.label`
  position: absolute;
  bottom: 1vh;
  right: calc(10vw + 2.5rem);
  top: 87vh;
  z-index: 1000;

  width: 2.5rem;
  height: 2.5rem;
  padding: 0.8rem;
  border-radius: 5px;
  border: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  outline: 0;
  background: transparent;
  background-color: var(--main-color);

  span {
    width: 100%;
    height: 3.2px;
    border-radius: 5px;

    transition: all 0.5s;
    transform-origin: left;

    background-color: #fff;
  }

  &:has(input:checked) {
    span:first-child {
      transform: rotate(34deg) scaleX(1.2);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(-34deg) scaleX(1.2);
    }
  }

  input {
    display: none;
  }
`;

export default function Header() {
  return (
    <STHeader>
      <img src="/vite.svg" alt="vite logotype" />
      <STHamburgerLabel htmlFor="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
        <input type="checkbox" id="hamburger-menu" />
      </STHamburgerLabel>
      <STNav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Proyects</a>
        <a href="#">Experience</a>
        <a href="#">Contact</a>
      </STNav>
    </STHeader>
  );
}
