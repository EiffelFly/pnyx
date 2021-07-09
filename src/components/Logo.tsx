import * as React from "react";
import PnyxLogoBlack from "../static/img/PnyxLogoBlack.png"

interface Props {
  className: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={className}
    >
      <img src={PnyxLogoBlack} className="object-contain" alt="logo" />
    </div>
  )
}