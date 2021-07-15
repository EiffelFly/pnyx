import React from "react";
import { HowItWorksButton } from "./buttons/HowItWorksButton";
import { FeaturesButton } from "./buttons/FeaturesButton";
import { PynxLogoButton } from "./buttons/PynxLogoButton";
import { NavBarTranslationDropdown } from "./NavbarTranslationDropdown";
import { DiscordButton } from "./buttons/DiscordButton";
import { SubstackButton } from "./buttons/SubstackButton";

export const Navbar: React.FC = () => {
  return (
    <div
      className="flex w-screen flex-row px-6 h-20 flex-shrink-0"
    >
      <PynxLogoButton />
      <div
        className="ml-auto flex flex-row gap-x-6"
      >
        <DiscordButton />
        <SubstackButton />
        <FeaturesButton />
        <HowItWorksButton />
        <NavBarTranslationDropdown />
      </div>
    </div>
  )
}