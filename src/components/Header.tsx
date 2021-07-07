import React from "react";

export const Header: React.FC = ({ children }) => {
  return (
    <div
      className="text-center font-sans font-bold text-sd-black text-5xl"
    >
      { children }
    </div>
  )
}