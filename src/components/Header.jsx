import styled from "styled-components";
import { v4 as uuid } from "uuid";
import linksConfig from "../assets/linksConfig.json";

const STHeader = styled.header`
  position: fixed;
  z-index: 800;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  min-height: 50px;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--secondary-color);

  @media screen and (min-width: 765px) {
    min-height: 80px;

    nav.menu-visible {
      top: unset;
    }

    button {
      display: none;
    }

    nav {
      position: unset;
      z-index: unset;
      width: 100%;
      height: auto;

      flex-direction: row;
      justify-content: flex-end;

      background-color: inherit;

      clip-path: unset;
    }
  }
`;

const STNav = styled.nav`
  position: absolute;
  left: 0;
  top: -15vh;
  z-index: 900;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1.8rem;

  clip-path: circle(0 at 50% 0);
  transition: 0.7s ease;

  background-color: var(--secondary-color);

  a {
    font-size: 1.3rem;
  }

  &.menu-visible {
    clip-path: circle(100% at 50% 50%);
    top: 0;

    & ~ button {
      span:first-child {
        transform: rotate(34.5deg) scaleX(1.2);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform: rotate(-34.5deg) scaleX(1.2);
      }
    }
  }
`;

const STHamburgerBtn = styled.button`
  position: absolute;
  right: calc(-2vw + 2.5rem);
  top: 88vh;
  z-index: 1000;

  width: 4rem;
  height: 4rem;
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
`;

const closeMenu = () => {
  document.getElementById("hamburger-menu").classList.remove("menu-visible");
};

export default function Header() {
  return (
    <STHeader>
      <img src="/vite.svg" alt="vite logotype" />
      <STNav id="hamburger-menu">
        {linksConfig.map(({ href, title }) => (
          <a key={uuid()} onClick={closeMenu} href={href}>
            {title}
          </a>
        ))}
      </STNav>
      <STHamburgerBtn
        onClick={() =>
          document
            .getElementById("hamburger-menu")
            .classList.toggle("menu-visible")
        }
        id="hamburger-menu-btn"
      >
        <span></span>
        <span></span>
        <span></span>
      </STHamburgerBtn>
    </STHeader>
  );
}
