import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { sendAmplitudeData } from "../../utilities/amplitude";

interface Props {
  className?: string;
}

const GlanceFeaturesActionButton: React.FC<Props & RouteComponentProps> = ({ className, history }) => {

  const { t } = useTranslation();

  return (
    <button
      className={"w-60 md:w-80 py-3 bg-sd-brwhite rounded-lg text-sd-black border border-sd-brcyan text-center text-xl md:text-2xl font-bold cursor-pointer hover:bg-sd-white " + className }
      onClick={() => {
        history.push("/features")
        sendAmplitudeData("hitting_features_page", {})
      }}
    >
      {t("components:buttons.glanceFeaturesActionButton")}
    </button>
  )
}

export default withRouter(GlanceFeaturesActionButton)