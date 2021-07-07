import * as React from "react";

interface Props {
  width: number;
  height: number;
}

export const CustomizeDivider: React.FC<Props> = ({ width, height }) => {
  const dimensionStyle = `w-${width} mr-${width} h-${height}`
  return (
    <div
      className={ "flex border-r border-sd-black my-auto" + " " + dimensionStyle }
    ></div>
  )
}