import * as React from "react";

interface Props {}

export const PrivateAndPoliciesButton: React.FC<Props> = () => {
  return (
    <a 
      href=""
      className="font-sans h-10 flex font-light text-sd-black text-lg my-auto hover:bg-sd-brcyan hover:bg-opacity-20 px-2 rounded-md"
    >
      <div
        className="my-auto"
      >
        Private & Policies
      </div>
    </a>
  )
}