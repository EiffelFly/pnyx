import * as React from "react";
import { CopywriteText } from "./CopywriteText";

interface Props {
  className: string;
}

export const MainCopyWrite: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={className}
    >
      <div
        className="bg-sd-white rounded-2xl shadow-2xl px-4 py-16 md:px-16"
      >
        <CopywriteText className="" >
          Hi everyone, <br />
          I am Po Chun.
        </CopywriteText>
        <CopywriteText className="mt-6" >
          Discussion are crucial. It sparks brilliant and novel ideas. 
          It leverages the best part of us and share with others by default. 
          It feels great when discuss with someone about the topic you are interested in. 
        </CopywriteText>
        <CopywriteText className="mt-6" >
          No matter what perspective we have, though discussion we may reach some standpoint 
          we share together.
        </CopywriteText>
        <CopywriteText className="mt-6" >
          But discussion now seems to be shallow and fragmented, it steadily becomes something 
          to let us browse through rather than something to think and engage. 
        </CopywriteText>
        <CopywriteText className="mt-6" >
          It is filled with fake information and polarized messages, its quantity surpasses its quality, 
          it becomes hard to organize and eroded by new content day by day.
        </CopywriteText>
        <CopywriteText className="mt-6" >
          Social media, online forums, message tools, communication tools. They are not good at operating 
          a good discussion. They are hard to see the whole picture.
        </CopywriteText>
        <CopywriteText className="mt-6" >
          Now discussions feel like swim in a very small and dirty pond with no fresh water enter.
        </CopywriteText>
        <CopywriteText className="mt-6" >
          But we are still looking forward to have a great discussion, though internet, 
          though connection. To share ideas, to spark genius, to interact with each other in a deep manner.
        </CopywriteText>
        <CopywriteText className="mt-6" >
          It's time to re-image, re-think, re-do the software for wonderful discussions.
        </CopywriteText>
      </div>
      
    </div>
  )
}