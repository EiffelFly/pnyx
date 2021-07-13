import * as React from "react";
import { useTranslation } from "react-i18next";
import { sendAmplitudeData } from "../../utilities/amplitude"

interface Props { 
  className?: string;
}

export const JoinWaitListActionButton: React.FC<Props> = ({ className }) => {

  const { t } = useTranslation();

  return (
    <a
      href="https://usepnyx.substack.com/p/coming-soon?r=ou126&utm_campaign=post&utm_medium=web&utm_source=copy"
      target="_blank"
      rel="noopener noreferrer"
      className={"w-60 md:w-80 py-3 bg-sd-brcyan rounded-lg text-sd-brwhite text-center text-xl md:text-2xl font-bold cursor-pointer hover:bg-sd-brblue " + className }
      onClick={() => {
        sendAmplitudeData("join_waitlist", {})
      }}
    >
      {t("components:buttons.joinWaitListActionButton")}
    </a>
  )
}