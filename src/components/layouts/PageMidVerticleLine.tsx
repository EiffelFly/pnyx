import * as React from "react";

interface Props {
  className: string;
}

export const PageMidVerticleLine: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={"grid grid-cols-2 divide-x " + className }
    >
      <div></div>
      <div></div>
    </div>
  )
}