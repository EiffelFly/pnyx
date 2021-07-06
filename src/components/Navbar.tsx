import React from "react";
import { HowItWorksButton } from "./HowItWorksButton";
import { FeaturesButton } from "./FeaturesButton"

export const Navbar: React.FC = () => {
  return (
    <div
      className="flex flex-row px-6 h-16"
    >
      <div
        className="mr-auto text-sd-black text-2xl font-sans font-bold my-auto"
      >
        Pnyx
      </div>
      <div
        className="ml-auto flex flex-row gap-x-6"
      >
        <FeaturesButton />
        <HowItWorksButton />
      </div>
    </div>
  )
}