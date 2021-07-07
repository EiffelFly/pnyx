import * as React from "react";
import { FeatureBlockLayoutImgRight } from "./layouts/FeatureBlockLayoutImgRight";
import { FeatureBlockLayoutImgLeft } from "./layouts/FeatureBlockLayoutImgLeft";

import GraphImg from "../static/img/GraphImg.png";
import RealTimeInYourControlImg from "../static/img/RealTimeInYourControlImg.png";
import ReferenceImg from "../static/img/ReferenceImg.png"
import ArchiveLinkImg from "../static/img/ArchiveLinkImg.png"


interface Props {
  className: string;
}

export const FeatureBlocks: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={"flex flex-col gap-y-8 " + className }
    >
      <FeatureBlockLayoutImgRight
        title={"Graph centered experience"}
        content={"Different from traditional listing structure, we rearrange discussion in graph. With the graph we called 'Hologram' you can have the whole picture of this discussion."}
      >
        <img src={GraphImg} className="shadow-xl rounded-2xl border border-sd-brcyan border-opacity-50" alt="GraphImg" />
      </FeatureBlockLayoutImgRight>
      <FeatureBlockLayoutImgLeft
        title={"Real-time or not, in your control"}
        content={"Real-time conversation has double-edge, it may benefit you at some situation but will shrink the space for cultivating brilliant idea. This is in your control, you can determine whether activate the real-time feature of this discussion."}
      >
        <img src={RealTimeInYourControlImg} className="shadow-xl rounded-2xl border border-sd-brcyan border-opacity-50" alt="GraphImg" />
      </FeatureBlockLayoutImgLeft>
      <FeatureBlockLayoutImgRight
        title={"Manage reference at one place"}
        content={"References are all tracked in one place, attendee can mark references as suspicious and warn others when reference it."}
      >
        <img src={ReferenceImg} className="shadow-xl rounded-2xl border border-sd-brcyan border-opacity-50" alt="GraphImg" />
      </FeatureBlockLayoutImgRight>
      <FeatureBlockLayoutImgLeft
        title={"Archive discussion for future"}
        content={"Discussion is valuable, it should not flooded away by new content day by day, there should be single place to store these pleasure. When you archive the discussion you can download it as JSON file or store in our database for future reference."}
      >
        <img src={ArchiveLinkImg} className="shadow-xl rounded-2xl border border-sd-brcyan border-opacity-50" alt="GraphImg" />
      </FeatureBlockLayoutImgLeft>
    </div> 
  )
}
