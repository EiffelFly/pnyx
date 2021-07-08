import * as React from "react";
import { HomePageHeadline } from "../components/HomePageHeadline";
import { MainCopyWrite } from "../components/MainCopyWrite";
import { MainHero } from "../components/MainHero";
import { Navbar } from "../components/Navbar";
import { PageMidVerticleLine } from "../components/layouts/PageMidVerticleLine";
import { JoinWaitListButton } from "../components/buttons/JoinWaitListButton";
import SeeHowPnyxWorksButton3D from "../components/buttons/SeeHowPnyxWorksButton3D";
import SeeHowPnyxWorksButton from "../components/buttons/SeeHowPnyxWorksButton";
import { Footer } from "../components/Footer";


interface Props {}

export const HomePage: React.FC<Props> = () => {
  return (
    <div
      className="flex flex-col h-screen w-screen bg-sd-brwhite overflow-y-auto"
    >
      <Navbar />
      <HomePageHeadline className="mt-36 w-7/12 mx-auto" />
      <SeeHowPnyxWorksButton3D className="mt-16 mx-auto" />
      <MainHero className="mt-16 w-8/12 mx-auto" />
      <MainCopyWrite className="mt-16 w-6/12 mx-auto" />
      <PageMidVerticleLine className="mt-16 h-80 divide-sd-brgreen divide-x-2" />
      <JoinWaitListButton className="mt-16 mx-auto" />
      <SeeHowPnyxWorksButton className="mt-8 mx-auto" />
      <Footer className="mt-72" />
    </div>
  )
}