import * as React from "react";
import { useTranslation } from "react-i18next";

import { FeatureBlockLayoutImgRight } from "./layouts/FeatureBlockLayoutImgRight";
import { FeatureBlockLayoutImgLeft } from "./layouts/FeatureBlockLayoutImgLeft";
import GraphImg from "../static/img/GraphImg.png";
import RealTimeInYourControlImg from "../static/img/RealTimeInYourControlImg.png";
import ReferenceImg from "../static/img/ReferenceImg.png"
import ArchiveLinkImg from "../static/img/ArchiveLinkImg.png"

interface Props {
  className: string;
}

export const FeatureBlocks: React.FC<Props> = ({ className }) => {

  const { t } = useTranslation();

  return (
    <div
      className={"flex flex-col gap-y-8 " + className }
    >
      <FeatureBlockLayoutImgRight
        title={t("pages:features.features.one.title")}
        content={t("pages:features.features.one.content")}
      >
        <img src={GraphImg} className="shadow-xl rounded-2xl border border-sd-brcyan border-opacity-50" alt="GraphImg" />
      </FeatureBlockLayoutImgRight>
      <FeatureBlockLayoutImgLeft
        title={t("pages:features.features.two.title")}
        content={t("pages:features.features.two.content")}
      >
        <img src={RealTimeInYourControlImg} className="shadow-xl rounded-2xl border border-sd-brcyan border-opacity-50" alt="GraphImg" />
      </FeatureBlockLayoutImgLeft>
      <FeatureBlockLayoutImgRight
        title={t("pages:features.features.three.title")}
        content={t("pages:features.features.three.content")}
      >
        <img src={ReferenceImg} className="shadow-xl rounded-2xl border border-sd-brcyan border-opacity-50" alt="GraphImg" />
      </FeatureBlockLayoutImgRight>
      <FeatureBlockLayoutImgLeft
        title={t("pages:features.features.four.title")}
        content={t("pages:features.features.four.content")}
      >
        <img src={ArchiveLinkImg} className="shadow-xl rounded-2xl border border-sd-brcyan border-opacity-50" alt="GraphImg" />
      </FeatureBlockLayoutImgLeft>
    </div> 
  )
}
