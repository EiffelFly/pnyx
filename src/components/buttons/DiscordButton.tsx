import * as React from "react";

interface Props {};

export const DiscordButton: React.FC<Props> = () => {
  return (
    <a
      className="font-sans h-10 flex font-regular text-sd-black text-lg my-auto hover:bg-sd-brcyan hover:bg-opacity-20 px-2 rounded-md"
      href="https://discord.gg/Qve3u9gahE"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="my-auto"
      >
        Discord
      </div>
    </a>
  )
}