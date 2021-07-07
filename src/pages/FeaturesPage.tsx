import * as React from "react";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FeaturesHeadline } from "../components/FeaturesHeadline";
import { FeatureBlocks } from "../components/FeatureBlocks";
import { PageMidVerticleLine } from "../components/layouts/PageMidVerticleLine";
import { JoinWaitListButton } from "../components/buttons/JoinWaitListButton";


interface Props {}

export const FeaturesPage: React.FC<Props> = () => {
  return (
    <div
      className="flex flex-col h-screen w-screen bg-sd-brwhite overflow-y-auto"
    >
      <Navbar />
      <FeaturesHeadline className="mt-36 w-7/12 mx-auto" />
      <FeatureBlocks className="mt-36 w-8/12 mx-auto" />
      <PageMidVerticleLine className="mt-16 h-80 divide-sd-brgreen divide-x-2" />
      <JoinWaitListButton className="mt-16 mx-auto" />
      <Footer className="mt-72" />
    </div>
  )
}