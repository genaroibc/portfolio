import { STSectionTitle, STSubTitle } from "./shared/STComponents";
import { Accordion } from "./shared/Accordion";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { HARD_SKILLS_LIST, SOFT_SKILLS_LIST } from "../assets/skillsList.json";

import { TechStackList } from "./TechStackList";

function Stack() {
  const { t } = useTranslation();

  return (
    <section className="animated-section" id="skills">
      <STSectionTitle>{t("SKILLS_SECT.TITLE")}</STSectionTitle>
      <STSubTitle>{t("SKILLS_SECT.SUBTITLE_1")}</STSubTitle>

      <Accordion
        style={{ backgroundColor: "var(--terciary-color)", color: "#fff" }}
        multiple={true}
        data={HARD_SKILLS_LIST.map(({ items }, i) => ({
          title: t(`SKILLS_SECT.HARD_SKILLS_LIST.${i}.title`),
          content: <TechStackList items={items} />
        }))}
      />

      <STSubTitle margin="5rem auto 3rem">
        {t("SKILLS_SECT.SUBTITLE_2")}
      </STSubTitle>

      <Accordion
        data={SOFT_SKILLS_LIST.map((_, i) => ({
          content: t(`SKILLS_SECT.SOFT_SKILLS_LIST.${i}.content`),
          title: t(`SKILLS_SECT.SOFT_SKILLS_LIST.${i}.title`)
        }))}
      />
    </section>
  );
}

export default memo(Stack);
