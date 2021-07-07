import * as React from "react";

interface Props {}

export const PynxLogoButton: React.FC<Props> = () => {
  const [hovered, setHovered] = React.useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <button
      className={hovered ? 
      "mr-auto my-auto text-3xl font-sans font-extrabold transition-colors duration-500 ease-linear text-transparent bg-clip-text bg-gradient-to-br from-sd-blue to-sd-cyan"
      :
      "mr-auto my-auto text-3xl font-sans font-extrabold text-sd-black"
      }
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      Pnyx
    </button>
  )
}