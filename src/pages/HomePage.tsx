import * as React from "react";
import { HomePageHeadline } from "../components/HomePageHeadline";
import { MainCopyWrite } from "../components/MainCopyWrite";
import { MainHero } from "../components/MainHero";
import { Navbar } from "../components/Navbar";
import { PageMidVerticleLine } from "../components/layouts/PageMidVerticleLine";
import { JoinWaitListActionButton } from "../components/buttons/JoinWaitListActionButton";
//import SeeHowPnyxWorksActionButton3D from "../components/buttons/SeeHowPnyxWorksActionButton3D";
import SeeHowPnyxWorksActionButton from "../components/buttons/SeeHowPnyxWorksActionButton";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
//import { MainPageCTASet } from "../components/MainPageCTASet";


interface Props {}

export const HomePage: React.FC<Props> = () => {
  return (
    <div
      className="flex flex-col h-screen w-screen bg-sd-brwhite overflow-y-auto"
    >
      <Navbar />
      <HomePageHeadline className="mt-36 px-4 w-full md:w-7/12 md:px-0 mx-auto" />
      <JoinWaitListActionButton className="mt-24 mx-auto"/>
      <MainHero className="mt-24 px-8 md:w-8/12 md:px-0 mx-auto" />
      <MainCopyWrite className="mt-24 px-8 md:w-6/12 md:px-0 mx-auto" />
      <PageMidVerticleLine className="mt-16 h-80 divide-sd-brgreen divide-x-2" />
      <JoinWaitListActionButton className="mt-16 mx-auto" />
      <SeeHowPnyxWorksActionButton className="mt-8 mx-auto" />
      <Logo className="mt-36 mx-auto w-20 h-20" />
      <Footer className="mt-36" />
    </div>
  )
}