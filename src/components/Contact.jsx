import styled from "styled-components";
import { STSectionTitle, STSubTitle } from "./shared/STComponents";
import contactList from "../assets/contactList.json";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";

const STContactItem = styled.li`
  img {
    align-self: center;
    margin: 0 auto 1rem;
    display: block;
  }

  a {
    letter-spacing: 4px;
    display: block;
  }
`;

const STContactList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;

  background-color: var(--terciary-color);
  padding: 1rem;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`;

const ContactItem = ({ imageSrc, title, href }) => (
  <STContactItem>
    <a target="_blank" href={href}>
      <img src={imageSrc} width={70} height={70} alt={title + " icon"} />
      {title}
    </a>
  </STContactItem>
);

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="animated-section" id="contact">
      <STSectionTitle>{t("CONTACT_SECT.TITLE")}</STSectionTitle>
      <STSubTitle>{t("CONTACT_SECT.SUBTITLE")}</STSubTitle>

      <STContactList>
        {contactList.map(item => (
          <ContactItem key={uuid()} {...item} />
        ))}
      </STContactList>
    </section>
  );
}
