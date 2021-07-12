import * as React from "react";
import { HowItWorksBulletPointLayout } from "./layouts/HowItWorksBulletPointLayout";
import { useTranslation } from "react-i18next";


interface Props { 
  className: string;
}

export const HowItWorksBulletPoints: React.FC<Props> = ({ className }) => {

  const { t } = useTranslation();

  return (
    <div
      className={ "flex flex-col gap-y-20 " + className }
    >
      <HowItWorksBulletPointLayout
        number={1}
        title={t("pages:howItWorks.bulletPoints.one.title")}
      >
        {t("pages:howItWorks.bulletPoints.one.content")}
      </HowItWorksBulletPointLayout>
      <HowItWorksBulletPointLayout
        number={2}
        title={t("pages:howItWorks.bulletPoints.two.title")}
      >
        {t("pages:howItWorks.bulletPoints.two.content")}
      </HowItWorksBulletPointLayout>
      <HowItWorksBulletPointLayout
        number={3}
        title={t("pages:howItWorks.bulletPoints.three.title")}
      >
        {t("pages:howItWorks.bulletPoints.three.content")}
      </HowItWorksBulletPointLayout>
      <HowItWorksBulletPointLayout
        number={4}
        title={t("pages:howItWorks.bulletPoints.four.title")}
      >
        {t("pages:howItWorks.bulletPoints.four.content")}
      </HowItWorksBulletPointLayout>
    </div>
  )
}