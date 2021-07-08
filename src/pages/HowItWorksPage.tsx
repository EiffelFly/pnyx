import * as React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HowItWorksHeadline } from "../components/HowItWorksHeadline";
import { MainHero } from "../components/MainHero";
import { HowItWorksBulletPoints } from "../components/HowItWorksBulletPoints";
import { PageMidVerticleLine } from "../components/layouts/PageMidVerticleLine";
import { JoinWaitListButton } from "../components/buttons/JoinWaitListButton";
import GlanceFeaturesButton from "../components/buttons/GlanceFeaturesButton";

interface Props { }

export const HowItWorksPage: React.FC<Props> = () => {
  return (
    <div
      className="flex flex-col bg-sd-brwhite w-screen h-screen overflow-y-auto"
    >
      <Navbar />
      <HowItWorksHeadline className="mt-36 w-7/12 mx-auto" />
      <MainHero className="mt-36 w-8/12 mx-auto" />
      <HowItWorksBulletPoints className="mt-36 w-6/12 mx-auto" />
      <PageMidVerticleLine className="mt-16 h-80 divide-sd-brgreen divide-x-2" />
      <JoinWaitListButton className="mt-16 mx-auto" />
      <GlanceFeaturesButton className="mt-8 mx-auto" />
      <Footer className="mt-72" />
    </div>
  )
}