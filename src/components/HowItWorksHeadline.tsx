import React from "react";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";

interface Props {
  className: string;
}

export const HowItWorksHeadline: React.FC<Props> = ({ className }) => {
  return (
    <div
    className={"flex flex-col gap-y-4 " +  className }
    >
      <Header >
        Take every conversation as whole picture
      </Header>
      <SubHeader>
        Graph is powerful tool for discussion, it leverages everyone to involve into the dicussion deeper
      </SubHeader>
    </div>
  )
}