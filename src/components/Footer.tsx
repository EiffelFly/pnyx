import * as React from "react";
import { DiscordButton } from "./buttons/DiscordButton";
//import { PrivateAndPoliciesButton } from "./buttons/PrivateAndPoliciesButton";
import { FeaturesButton } from "./buttons/FeaturesButton"
import { HowItWorksButton } from "./buttons/HowItWorksButton"
import { SubstackButton } from "./buttons/SubstackButton";
import { CustomizeDivider } from "./layouts/CustomizeDivider";

interface Props { 
  className: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={"flex w-screen justify-center flex-row px-6 h-20 flex-shrink-0 " + className }
    >
      <FeaturesButton />
      <CustomizeDivider height={6} width={2} />
      <HowItWorksButton />
      <CustomizeDivider height={6} width={2} />
      <DiscordButton />
      <CustomizeDivider height={6} width={2} />
      <SubstackButton />
    </div>
  )
}