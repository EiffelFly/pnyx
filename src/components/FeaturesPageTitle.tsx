import * as React from "react";
import { PageTitle } from "./PageTitle";

interface Props {
  className: string;
}

export const FeaturesPageTitle: React.FC<Props> = ({ className }) => {
  return (
    <PageTitle
      className={className}
    >
      Features
    </PageTitle>
  )
}