import { withRouter } from "react-router-dom";

export const HowItWorksButton = withRouter(({ history }) => {
  return (
    <button
      className="font-sans h-10 flex font-light text-sd-black text-lg my-auto hover:bg-sd-brcyan hover:bg-opacity-20 px-2 rounded-md"
      onClick={() => {
        history.push("/how-it-works");
      }}
    >
      <div
        className="my-auto"
      >
        How it works
      </div>
    </button>
  )
})