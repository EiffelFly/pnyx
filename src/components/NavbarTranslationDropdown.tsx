import * as React from "react";
import { NavbarDropdown } from "./NavbarDropdown";
import { useTranslation } from "react-i18next";

interface Props {}

export const NavBarTranslationDropdown: React.FC<Props> = () => {

  const { t, i18n } = useTranslation();

  return (
    <NavbarDropdown 
      placeholder={t("components:buttons.translationButton")}
      className=""
    >
      <div
        className="flex flex-col w-32 fixed top-20 bg-sd-brwhite border border-sd-brblue rounded-sm py-2"         
      >
        <button
          className="px-4 py-2 text-left hover:bg-sd-white"
          onClick={() => {
            i18n.changeLanguage("zh-TW")
          }}
        >
          中文
        </button>
        <button
          className="px-4 py-2 text-left hover:bg-sd-white"
          onClick={() => {
            i18n.changeLanguage("en")
          }}
        >
          English
        </button>
      </div>
    </NavbarDropdown>
  )
}