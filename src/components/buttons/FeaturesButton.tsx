import { useState } from "react";
import { withRouter } from "react-router-dom";

export const FeaturesButton = withRouter(({ history, location }) => {

  const [match,] = useState(location.pathname === "/features" ? true : false);

  return (
    <button
      className={match ?
        "underline font-sans h-10 flex font-light text-sd-black text-lg my-auto hover:bg-sd-brcyan hover:bg-opacity-20 px-2 rounded-md"
        :
        "font-sans h-10 flex font-light text-sd-black text-lg my-auto hover:bg-sd-brcyan hover:bg-opacity-20 px-2 rounded-md"
      }
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