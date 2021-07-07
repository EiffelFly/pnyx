import * as React from "react";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";

interface Props {
  className: string;
}

export const FeaturesHeadline: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={"flex flex-col gap-y-4 " +  className }
    >
      <Header>
        Built for cultivating briliant ideas
      </Header>
      <SubHeader>
        Discuss in text is a powerful way to gain insight, it non-realtime feature 
        provide us space for great ideas.
      </SubHeader>
    </div>
  )
}