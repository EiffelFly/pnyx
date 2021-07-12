import * as React from "react";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";
import { useTranslation } from "react-i18next";


interface Props {
  className: string
}

export const HomePageHeadline: React.FC<Props> = ({ className }) => {

  const { t } = useTranslation();

  return (
    <div
      className={"flex flex-col gap-y-8 " +  className }
    >
      <Header >
        {t("pages:main.header.line1")}<br /> 
        {t("pages:main.header.line2")}
      </Header>
      <SubHeader>
        {t("pages:main.subHeader")}
      </SubHeader>
    </div>
  )
}