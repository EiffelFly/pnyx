import React from "react";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";
import { useTranslation } from "react-i18next";


interface Props {
  className: string;
}

export const HowItWorksHeadline: React.FC<Props> = ({ className }) => {

  const { t } = useTranslation();

  return (
    <div
    className={"flex flex-col gap-y-4 " +  className }
    >
      <Header >
        {t("pages:howItWorks.header")}
      </Header>
      <SubHeader>
        {t("pages:howItWorks.subheader")}
      </SubHeader>
    </div>
  )
}