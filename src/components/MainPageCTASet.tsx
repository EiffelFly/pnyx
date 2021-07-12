import * as React from "react";
import { JoinWaitListActionButton } from "./buttons/JoinWaitListActionButton";
import SeeHowPnyxWorksActionButton3D from "./buttons/SeeHowPnyxWorksActionButton3D";

interface Props { 
  className?: string;
}

export const MainPageCTASet: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={"flex flex-col gap-y-6 md:flex-row md:gap-x-6 " + className }
    >
      <JoinWaitListActionButton />
      <SeeHowPnyxWorksActionButton3D/>
    </div>
  )
}