import * as React from "react";
import { useTranslation } from "react-i18next";

interface Props { 
  className: string;
}

export const JoinWaitListActionButton: React.FC<Props> = ({ className }) => {

  const { t } = useTranslation();

  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdOiswOgl0FG0lAglTRtqJgMBzOw9FQabYZQcHF9iTa9z1sQA/viewform?usp=sf_link"
      target="_blank"
      rel="noopener noreferrer"
      className={"w-60 md:w-80 py-3 bg-sd-brcyan rounded-lg text-sd-brwhite text-center text-xl md:text-2xl font-bold cursor-pointer hover:bg-sd-brblue " + className }
    >
      {t("components:buttons.joinWaitListActionButton")}
    </a>
  )
}