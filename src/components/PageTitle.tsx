import * as React from "react";

interface Props {
  className: string;
}

export const PageTitle: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={"flex flex-col " + className}
    >
      <div
        className="font-sans font-semibold text-3xl text-sd-black"
      >
        {children}
      </div>
      <div
        className="border-b border-sd-black h-4"
      ></div>
    </div>
  )
}