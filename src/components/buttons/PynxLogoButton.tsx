import * as React from "react";
import { withRouter } from "react-router-dom";

//interface Props { }

export const PynxLogoButton = withRouter(({ history }) => {
  const [hovered, setHovered] = React.useState(false);
  const [refreshed, setRefreshed] = React.useState(false);
  const toggleHover = () => {
    if (refreshed) {
      setRefreshed(false);
      return
    }
    setHovered(!hovered)
  };
  return (
    <button
      className={hovered ?
        "mr-auto my-auto text-3xl font-sans font-extrabold transition-colors duration-500 ease-linear text-transparent bg-clip-text bg-gradient-to-br from-sd-blue to-sd-cyan"
        :
        "mr-auto my-auto text-3xl font-sans font-extrabold text-sd-black"
      }
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={() => {
        if (hovered) {
          console.log(hovered)
          setRefreshed(true);
          toggleHover();
        }
        history.push("/");
      }}
    >
      Pnyx
    </button>
  )
})