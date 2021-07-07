import * as React from "react";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

interface Props {}

export const FeaturesPage: React.FC<Props> = () => {
  return (
    <div>
      <Navbar />

      <Footer className="mt-72" />
    </div>
  )
}