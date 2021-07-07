import * as React from "react";
import PnyxMainHeroImg from "../static/PnyxMainHeroImg.png"

interface Props {
  className: string;
}

export const MainHero: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={className + " mx-auto"}
    >
      <img src={PnyxMainHeroImg} className="object-contain shadow-2xl rounded-2xl" alt="main-hero-img" />
    </div>
  )
}