import * as React from "react";

interface Props { 
  className: string;
}

export const SeeHowPnyxWorksButton3D: React.FC<Props> = ({ className }) => {
  return (
    <a
      className={"w-80 py-3 bg-sd-brwhite rounded-lg shadow-2xl text-sd-black border border-sd-brcyan text-center text-2xl font-bold cursor-pointer hover:bg-sd-white " + className }
    >
      See how Pnyx works
    </a>
  )
}