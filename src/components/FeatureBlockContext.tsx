import * as React from "react";

interface Props { 
  title: string;
  content: string
}

export const FeatureBlockContext: React.FC<Props> = ({ title, content }) => {
  return (
    <div
      className="flex flex-col"
    >
      <div
        className="my-auto"
      >
        <div
          className="text-left font-sans font-bold text-3xl text-sd-black"
        >
          {title}
        </div>
        <div
          className="mt-6 text-left font-regular font-sans text-lg text-sd-black"
        >
          {content}
        </div>
      </div>
      
    </div>
  )
}