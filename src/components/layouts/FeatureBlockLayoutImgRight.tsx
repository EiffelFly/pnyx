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
      className="flex flex-col md:flex-row-reverse w-full bg-sd-white p-8 rounded-2xl gap-y-16 md:gap-x-8"
    >
      <FeatureBlockImg>
        {children}
      </FeatureBlockImg>
      <FeatureBlockContext 
        title={title}
        content={content}
      />
    </div>
  )
}