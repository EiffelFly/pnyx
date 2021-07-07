import * as React from "react";
import { FeatureBlockContext } from "../FeatureBlockContext";
import { FeatureBlockImg } from "../FeatureBlockImg";

interface Props {
  title: string;
  content: string;
}

export const FeatureBlockLayoutImgRight: React.FC<Props> = ({ title, content, children }) => {
  return (
    <div
      className="flex flex-row w-full bg-sd-white p-8 rounded-2xl gap-x-8"
    >
      <FeatureBlockContext 
        title={title}
        content={content}
      />
      <FeatureBlockImg>
        {children}
      </FeatureBlockImg>
    </div>
  )
}