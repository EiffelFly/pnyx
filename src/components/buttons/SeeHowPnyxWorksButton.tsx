import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props { 
  className: string;
}

const SeeHowPnyxWorksButton: React.FC<Props & RouteComponentProps> = ({ className, history }) => {
  return (
    <button
      className={"w-80 py-3 bg-sd-brwhite rounded-lg text-sd-black border border-sd-brcyan text-center text-2xl font-bold cursor-pointer hover:bg-sd-white " + className }
      onClick={() => {
        history.push("/how-it-works")
      }}
    >
      See how Pnyx works
    </button>
  )
}

export default withRouter(SeeHowPnyxWorksButton);