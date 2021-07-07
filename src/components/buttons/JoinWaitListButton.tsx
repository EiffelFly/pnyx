import * as React from "react";

interface Props { 
  className: string;
}

export const JoinWaitListButton: React.FC<Props> = ({ className }) => {
  return (
    <a
      className={"w-72 py-4 bg-sd-brcyan rounded-lg text-sd-brwhite text-center text-2xl font-bold cursor-pointer hover:bg-sd-brblue " + className }
    >
      Join waitlist
    </a>
  )
}