import * as React from "react";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";
import { useTranslation } from "react-i18next";


interface Props {
  className: string;
}

export const FeaturesHeadline: React.FC<Props> = ({ className }) => {

  const { t } = useTranslation();

  return (
    <div
      className={"flex flex-col gap-y-8 " +  className }
    >
      <Header>
        {t("pages:features.header")}
      </Header>
      <SubHeader>
        {t("pages:features.subHeader")}
      </SubHeader>
    </div>
  )
}