import * as React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HowItWorksHeadline } from "../components/HowItWorksHeadline";
import { MainHero } from "../components/MainHero";
import { HowItWorksBulletPoints } from "../components/HowItWorksBulletPoints";
import { PageMidVerticleLine } from "../components/layouts/PageMidVerticleLine";
import { JoinWaitListActionButton } from "../components/buttons/JoinWaitListActionButton";
import GlanceFeaturesActionButton from "../components/buttons/GlanceFeaturesActionButton";
import { Logo } from "../components/Logo";

interface Props { }

export const HowItWorksPage: React.FC<Props> = () => {
  return (
    <div
      className="flex flex-col bg-sd-brwhite w-screen h-screen overflow-y-auto"
    >
      <Navbar />
      <HowItWorksHeadline className="mt-36 px-4 md:px-0 md:w-7/12 mx-auto" />
      <MainHero className="mt-24 px-8 md:px-0 md:w-8/12 mx-auto" />
      <HowItWorksBulletPoints className="mt-24 px-8 md:w-6/12 mx-auto" />
      <PageMidVerticleLine className="mt-16 h-80 divide-sd-brgreen divide-x-2" />
      <JoinWaitListActionButton className="mt-16 mx-auto" />
      <GlanceFeaturesActionButton className="mt-8 mx-auto" />
      <Logo className="mt-36 mx-auto w-20 h-20" />
      <Footer className="mt-36" />
    </div>
  )
}