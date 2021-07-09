import * as React from "react";

interface Props {
  number: number;
  title: string
}

export const HowItWorksBulletPointLayout: React.FC<Props> = ({ number, title, children }) => {
  return (
    <div
      className={ "flex flex-col" }
    >
      <div
        className="flex flex-col md:flex-row"
      >
        <div
          className="font-sans w-12 font-bold text-4xl text-sd-black m-auto"
        >
          {number}
        </div>
        <div
          className="mt-4 md:mt-0 font-sans flex-1 font-bold text-3xl text-sd-black text-left"
        >
          {title}
        </div>
      </div>
      <div
        className="mt-6 font-sans text-left font-medium text-lg w-full"
      >
        {children}
      </div>
    </div>
  )
}