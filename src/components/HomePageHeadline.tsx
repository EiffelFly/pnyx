import * as React from "react";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";

interface Props {
  className: string
}

export const HomePageHeadline: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={"flex flex-col gap-y-4 " +  className }
    >
      <Header >
        Make great discussion occur,<br /> in graph
      </Header>
      <SubHeader>
        Pnyx is a text discussion tool built upon graph, for people who is seeking brilliant ideas and insights
      </SubHeader>
    </div>
  )
}