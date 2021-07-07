import * as React from "react";

interface Props { }

export const FeatureBlockImg: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="rounded-md w-60 h-60 flex-shrink-0"
    >
      {children}
    </div>
  )
}