import * as React from "react";
import { PageTitle } from "./PageTitle";
import { useTranslation } from "react-i18next";

interface Props {
  className: string;
}

export const HowItWorksPageTitle: React.FC<Props> = ({ className }) => {

  const { t } = useTranslation();

  return (
    <PageTitle
      className={className}
    >
      {t("pages:howItWorks.pageTitle")}
    </PageTitle>
  )
}