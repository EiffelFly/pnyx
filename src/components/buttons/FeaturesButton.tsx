import { useState } from "react";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { sendAmplitudeData } from "../../utilities/amplitude";

export const FeaturesButton = withRouter(({ history, location }) => {

  const [match,] = useState(location.pathname === "/features" ? true : false);

  const { t } = useTranslation();

  return (
    <button
      className={match ?
        "underline font-sans h-10 flex font-regular text-sd-black text-lg my-auto hover:bg-sd-brcyan hover:bg-opacity-20 px-2 rounded-md"
        :
        "font-sans h-10 flex font-regular text-sd-black text-lg my-auto hover:bg-sd-brcyan hover:bg-opacity-20 px-2 rounded-md"
      }
      onClick={() => {
        history.push("/features");
        sendAmplitudeData("hitting_features_page", {})
      }}
    >
      <div
        className="my-auto"
      >
        {t("components:buttons.featuresButton")}
      </div>
    </button>
  )
})