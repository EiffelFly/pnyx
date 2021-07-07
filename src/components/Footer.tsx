import * as React from "react";
import { PrivateAndPoliciesButton } from "./buttons/PrivateAndPoliciesButton";
import { FeaturesButton } from "./buttons/FeaturesButton"
import { HowItWorksButton } from "./buttons/HowItWorksButton"
import { CustomizeDivider } from "./layouts/CustomizeDivider";

interface Props { 
  className: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={"flex w-screen justify-center flex-row px-6 h-20 flex-shrink-0 " + className }
    >
      <PrivateAndPoliciesButton />
      <CustomizeDivider height={6} width={2} />
      <FeaturesButton />
      <CustomizeDivider height={6} width={2} />
      <HowItWorksButton />
    </div>
  )
}