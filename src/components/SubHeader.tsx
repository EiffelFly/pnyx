import React from "react";

export const SubHeader: React.FC = ({ children }) => {
  return (
    <div
      className="text-center font-sans font-medium text-sd-bryellow text-2xl"
    >
      { children }
    </div>
  )
}