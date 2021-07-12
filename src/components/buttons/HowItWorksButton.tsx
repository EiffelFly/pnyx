import { useState } from "react";
import { withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { sendAmplitudeData } from "../../utilities/amplitude"


export const HowItWorksButton = withRouter(({ history, location }) => {

  const { t } = useTranslation();

  const [match,] = useState(location.pathname === "/how-it-works" ? true : false);

  return (
    <button
      className={match ?
        "underline font-sans h-10 flex font-regular text-sd-black text-lg my-auto hover:bg-sd-brcyan hover:bg-opacity-20 px-2 rounded-md"
        :
        "font-sans h-10 flex font-regular text-sd-black text-lg my-auto hover:bg-sd-brcyan hover:bg-opacity-20 px-2 rounded-md"
      }
      onClick={() => {
        history.push("/how-it-works");
        sendAmplitudeData("hitting_how_it_works_page", {})
      }}
    >
      <div
        className="my-auto"
      >
        {t("components:buttons.howItWorksButton")}
      </div>
    </button>
  )
})