import * as React from "react";
import { HowItWorksBulletPointLayout } from "./layouts/HowItWorksBulletPointLayout";


interface Props { 
  className: string;
}

export const HowItWorksBulletPoints: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={ "flex flex-col gap-y-12" + " " + className }
    >
      <HowItWorksBulletPointLayout
        number={1}
        title={"Create a public or private pynx and invite people in."}
      >
        Everyone can participate in public pynx and it will show up at pynx official website. 
        Once pynx set to private, only whom are invited though customize url can join.
      </HowItWorksBulletPointLayout>
      <HowItWorksBulletPointLayout
        number={2}
        title={"Write down what you think just as before."}
      >
        And we will take every comment as a node and display it on the graph we called “Hologram”. 
        And when you go down a layer we will draw a line between the child 
        and its parent to let everyone know the discussion had been deeper.
      </HowItWorksBulletPointLayout>
      <HowItWorksBulletPointLayout
        number={3}
        title={"Reference anything when you needed."}
      >
        Copy and paste any external url when you want to reference it, 
        Pnyx will automatically recognize it and draw dashed line between comment and 
        reference on Hologram. In the meanwhile it will also store all the reference 
        at the same place for searching or tracking. You can also reference the comment 
        in this discussion.
      </HowItWorksBulletPointLayout>
      <HowItWorksBulletPointLayout
        number={4}
        title={"Archive whole discussion for future."}
      >
        Once you finish the discussion or want to temporary close it, you can archive the discussion. 
        It can act like static website for public usage or private archive for yourself.
      </HowItWorksBulletPointLayout>
    </div>
  )
}