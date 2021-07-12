import * as React from "react";
import { CopywriteText } from "./CopywriteText";
import { useTranslation } from "react-i18next";


interface Props {
  className: string;
}

export const MainCopyWrite: React.FC<Props> = ({ className }) => {

  const { t } = useTranslation();

  return (
    <div
      className={className}
    >
      <div
        className="bg-sd-white rounded-2xl shadow-2xl px-4 py-16 md:px-16"
      >
        <CopywriteText className="" >
          {t("pages:main.copywrite.paragraph1.line1")} <br />
          {t("pages:main.copywrite.paragraph1.line2")}
        </CopywriteText>
        <CopywriteText className="mt-6" >
          {t("pages:main.copywrite.paragraph2")}
        </CopywriteText>
        <CopywriteText className="mt-6" >
          {t("pages:main.copywrite.paragraph3")}
        </CopywriteText>
        <CopywriteText className="mt-6" >
          {t("pages:main.copywrite.paragraph4")}
        </CopywriteText>
        <CopywriteText className="mt-6" >
          {t("pages:main.copywrite.paragraph5")}
        </CopywriteText>
        <CopywriteText className="mt-6" >
          {t("pages:main.copywrite.paragraph6")}
        </CopywriteText>
        <CopywriteText className="mt-6" >
          {t("pages:main.copywrite.paragraph7")}
        </CopywriteText>
        <CopywriteText className="mt-6" >
          {t("pages:main.copywrite.paragraph8")}
        </CopywriteText>
        <CopywriteText className="mt-6" >
          {t("pages:main.copywrite.paragraph9")}
        </CopywriteText>
      </div>
      
    </div>
  )
}