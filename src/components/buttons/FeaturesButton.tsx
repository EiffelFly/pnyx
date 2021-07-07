import { withRouter } from "react-router-dom";

export const FeaturesButton = withRouter(({ history }) => {
  return (
    <button
      className="font-sans font-light text-sd-black text-lg my-auto hover:bg-sd-brcyan hover:bg-opacity-20 px-2 py-0.5 rounded-md"
      onClick={() => {
        history.push("/features");
      }}
    >
      Features
    </button>
  )
})