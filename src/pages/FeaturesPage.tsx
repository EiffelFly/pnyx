import * as React from "react";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FeaturesHeadline } from "../components/FeaturesHeadline";
import { FeatureBlocks } from "../components/FeatureBlocks";
import { PageMidVerticleLine } from "../components/layouts/PageMidVerticleLine";
import { JoinWaitListActionButton } from "../components/buttons/JoinWaitListActionButton";
import { Logo } from "../components/Logo";


interface Props {}

export const FeaturesPage: React.FC<Props> = () => {
  return (
    <div
      className="flex flex-col h-screen w-screen bg-sd-brwhite overflow-y-auto"
    >
      <Navbar />
      <FeaturesHeadline className="mt-36 px-4 md:px-0 md:w-7/12 mx-auto" />
      <FeatureBlocks className="mt-36 px-8 md:px-0 md:w-8/12 mx-auto" />
      <PageMidVerticleLine className="mt-16 h-80 divide-sd-brgreen divide-x-2" />
      <JoinWaitListActionButton className="mt-16 mx-auto" />
      <Logo className="mt-36 mx-auto w-20 h-20" />
      <Footer className="mt-36" />
    </div>
  )
}