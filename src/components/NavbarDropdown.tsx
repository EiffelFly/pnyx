import React, { useRef } from "react";
import { CaretDownFillIcon } from "./icons/CaretDownFillIcon";
import { useOnClickOutside } from "../shared-hooks/useOnClickOutside"

interface Props {
  placeholder: string;
  className: string;
}

export const NavbarDropdown: React.FC<Props> = ({ placeholder, className, children }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  useOnClickOutside(ref, () => setIsOpen(false))

  return (
    <div
      className={"flex flex-col " + className }
    >
      <div
        className="dropsown-placeholder flex flex-row cursor-pointer h-10 my-auto hover:bg-sd-brcyan hover:bg-opacity-20 px-2 rounded-md"
        onClick={() => setIsOpen(true)}
      >
        <div
          className="font-sans font-regular text-sd-black text-lg my-auto mr-3"
        >
          {placeholder}
        </div>
        <CaretDownFillIcon size={4} />
      </div>
      { isOpen && 
        <div
          className="relative"
          ref={ref}
        >
          {children}
        </div>
      }
    </div>
  )
}