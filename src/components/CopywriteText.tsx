import * as React from "react";

interface Props {
  className: string;
}

export const CopywriteText: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={ "text-left font-sans font-normal text-lg " + className }
    >
      { children }
    </div>
  )
}