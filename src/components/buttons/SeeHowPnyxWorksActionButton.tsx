import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { sendAmplitudeData } from "../../utilities/amplitude";

interface Props { 
  className?: string;
}

const SeeHowPnyxWorksActionButton: React.FC<Props & RouteComponentProps> = ({ className, history }) => {

  const { t } = useTranslation();

  return (
    <button
      className={"w-60 md:w-80 py-3 bg-sd-brwhite rounded-lg text-sd-black border border-sd-brcyan text-center text-xl md:text-2xl font-bold cursor-pointer hover:bg-sd-white " + className }
      onClick={() => {
        history.push("/how-it-works")
        sendAmplitudeData("hitting_how_it_works_page", {})
      }}
    >
      {t("components:buttons.seeHowPnyxWorksActionButton")}
    </button>
  )
}

export default withRouter(SeeHowPnyxWorksActionButton);