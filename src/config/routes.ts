import { HomePage } from "../pages/HomePage";
import { FeaturesPage } from "../pages/FeaturesPage";
import { HowItWorksPage } from "../pages/HowItWorksPage";
import { IRoute } from "../interfaces/routes";

export const routes: IRoute[] = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    exact: true
  },
  {
    path: "/features",
    name: "FeaturesPage",
    component: FeaturesPage,
    exact: true
  },
  {
    path: "/how-it-works",
    name: "HowItWorksPage",
    component: HowItWorksPage,
    exact: true
  }
]