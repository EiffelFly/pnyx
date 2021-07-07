import { withRouter } from "react-router-dom";

export const FeaturesButton = withRouter(({ history }) => {
  return (
    <button
      className="font-sans flex font-light text-sd-black h-10 text-lg my-auto hover:bg-sd-brcyan hover:bg-opacity-20 px-2 rounded-md"
      onClick={() => {
        history.push("/features");
      }}
    >
      <div
        className="my-auto"
      >
        Features
      </div>
    </button>
  )
})