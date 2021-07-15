import * as React from "react";
import { sendAmplitudeData } from "../../utilities/amplitude";

interface Props { };

export const SubstackButton: React.FC<Props> = () => {
  return (
    <a
      className="font-sans h-10 flex font-regular text-sd-black text-lg my-auto hover:bg-sd-brcyan hover:bg-opacity-20 px-2 rounded-md"
      href="https://usepnyx.substack.com/p/coming-soon?r=ou126&utm_campaign=post&utm_medium=web&utm_source=copy"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        sendAmplitudeData("join_discord", {})
      }}
    >
      <div
        className="my-auto"
      >
        Substack
      </div>
    </a>
  )
}