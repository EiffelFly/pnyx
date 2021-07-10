import * as React from "react";
import { PageTitle } from "./PageTitle";

interface Props {
  className: string;
}

export const HowItWorksPageTitle: React.FC<Props> = ({ className }) => {
  return (
    <PageTitle
      className={className}
    >
      How it works
    </PageTitle>
  )
}