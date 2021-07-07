import * as React from "react";

interface Props { 
  className: string;
}

export const SeeHowPnyxWorksButton: React.FC<Props> = ({ className }) => {
  return (
    <a
      className={"w-80 py-3 bg-sd-brwhite rounded-lg text-sd-black border border-sd-brcyan text-center text-2xl font-bold cursor-pointer hover:bg-sd-white " + className }
    >
      See how Pnyx works
    </a>
  )
}