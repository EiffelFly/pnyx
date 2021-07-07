import React from "react";
import { HowItWorksButton } from "./buttons/HowItWorksButton";
import { FeaturesButton } from "./buttons/FeaturesButton"
import { PynxLogoButton } from "./buttons/PynxLogoButton";


export const Navbar: React.FC = () => {
  return (
    <div
      className="flex w-screen flex-row px-6 h-20 flex-shrink-0"
    >
      <PynxLogoButton />
      <div
        className="ml-auto flex flex-row gap-x-6"
      >
        <FeaturesButton />
        <HowItWorksButton />
      </div>
    </div>
  )
}