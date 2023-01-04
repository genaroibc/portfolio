import styled from "styled-components";
import { useTranslation } from "react-i18next";

const STFooter = styled.footer`
  background-color: var(--secondary-color);
  padding: 1rem 2rem 2rem;
  font-size: 1.5rem;
  border-top: 10px solid var(--complement-color);
`;

const STLink = styled.a`
  font-size: 1.5rem;

  width: fit-content;
  margin: auto;
  gap: 1rem;
`;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <STFooter>
      <p>
        {t("FOOTER_SECT.PGPH_1")}{" "}
        <a href="https://github.com/GenaroIBC" target="_blank">
          Genaro Bonavita
        </a>{" "}
        {t("FOOTER_SECT.PGPH_2")}
      </p>
      <STLink href="https://github.com/GenaroIBC/portfolio" target="_blank">
        {t("FOOTER_SECT.PGPH_3")}{" "}
        <img width="30" src="/svg/github.svg" alt="github icon" />
      </STLink>
    </STFooter>
  );
}
