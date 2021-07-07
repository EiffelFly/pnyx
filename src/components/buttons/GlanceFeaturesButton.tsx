import * as React from "react";

interface Props {
  className: string;
}

export const GlanceFeaturesButton: React.FC<Props> = ({ className }) => {
  return (
    <button
      className={"w-80 py-3 bg-sd-brwhite rounded-lg text-sd-black border border-sd-brcyan text-center text-2xl font-bold cursor-pointer hover:bg-sd-white " + className }
    >
      Glance Pnyx features
    </button>
  )
}