import * as React from "react";

interface Props {
  size: number;
}

export const CaretDownFillIcon: React.FC<Props> = (props) => {
  const iconStyle = `fill-current h-${props.size} w-${props.size} m-auto text-sd-black`
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={ iconStyle }
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 16 16"
    >
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
    </svg>
  )
};