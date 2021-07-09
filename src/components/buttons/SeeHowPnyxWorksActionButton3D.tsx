import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";


interface Props { 
  className: string;
}

const SeeHowPnyxWorksActionButton3D: React.FC<Props & RouteComponentProps> = ({ className, history }) => {
  return (
    <button
      className={"w-60 md:w-80 py-3 bg-sd-brwhite rounded-lg shadow-2xl text-sd-black border border-sd-brcyan text-center text-xl md:text-2xl font-bold cursor-pointer hover:bg-sd-white " + className }
      onClick={() => {
        history.push("/features")
      }}
    >
      See how Pnyx works
    </button>
  )
}

export default withRouter(SeeHowPnyxWorksActionButton3D)