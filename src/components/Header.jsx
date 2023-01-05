import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import headerLinks from "../assets/headerLinks";
import { LanguageBox } from "./shared/LanguageBox";

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

  @media screen and (min-width: 768px) {
    min-height: 80px;

    nav.menu-visible {
      top: unset;
    }

    #hamburger-menu-btn {
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

      font-size: 1.3rem;

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
  transition: clip-path 0.7s ease, top 0.7s ease;

  background-color: var(--secondary-color);

  font-size: 1.5rem;

  a {
    color: #ddd;
    position: relative;

    &::after,
    &::before {
      position: absolute;
      content: "";
      transition: width 0.3s;
      width: 0;
      height: 4px;
      bottom: -5px;
      background-color: #fff;
    }

    &::after {
      right: 50%;
    }

    &::before {
      left: 50%;
    }

    &:hover {
      color: #fff;

      &::after,
      &::before {
        width: 50%;
      }
    }
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
  top: 84vh;
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

    transition: transform 0.5s, opacity 0.5s;

    transform-origin: left;

    background-color: #fff;
  }
`;

const closeMenu = () => {
  document.getElementById("hamburger-menu").classList.remove("menu-visible");
};

export default function Header() {
  const { t } = useTranslation();

  return (
    <STHeader>
      <STNav id="hamburger-menu">
        {headerLinks.map(({ href, title }) => (
          <a key={uuid()} onClick={closeMenu} href={href}>
            {t(`HEADER_SECT.LINKS_LIST.${title}`)}
          </a>
        ))}
        <LanguageBox />
      </STNav>
      <STHamburgerBtn
        aria-label="navigation bar menu"
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
