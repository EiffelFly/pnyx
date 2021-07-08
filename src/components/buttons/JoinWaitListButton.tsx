import * as React from "react";

interface Props { 
  className: string;
}

export const JoinWaitListButton: React.FC<Props> = ({ className }) => {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSdOiswOgl0FG0lAglTRtqJgMBzOw9FQabYZQcHF9iTa9z1sQA/viewform?usp=sf_link"
      target="_blank"
      rel="noopener noreferrer"
      className={"w-80 py-3 bg-sd-brcyan rounded-lg text-sd-brwhite text-center text-2xl font-bold cursor-pointer hover:bg-sd-brblue " + className }
    >
      Join waitlist
    </a>
  )
}