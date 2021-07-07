import React from "react";

interface Props {

}

export const SubHeader: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="text-center font-sans font-medium text-sd-bryellow text-2xl"
    >
      { children }
    </div>
  )
}