import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useTranslation } from "react-i18next";


interface Props { 
  className: string;
}

const SeeHowPnyxWorksActionButton3D: React.FC<Props & RouteComponentProps> = ({ className, history }) => {

  const { t } = useTranslation();

  return (
    <button
      className={"w-60 md:w-80 py-3 bg-sd-brwhite rounded-lg shadow-2xl text-sd-black border border-sd-brcyan text-center text-xl md:text-2xl font-bold cursor-pointer hover:bg-sd-white " + className }
      onClick={() => {
        history.push("/how-it-works")
      }}
    >
      {t("components:buttons.seeHowPnyxWorksAction3D")}
    </button>
  )
}

export default withRouter(SeeHowPnyxWorksActionButton3D)