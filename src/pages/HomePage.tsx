import * as React from "react";
import { Navbar } from "../components/Navbar";

interface Props {}

export const HomePage: React.FC<Props> = () => {
  return (
    <div
      className="flex flex-col h-screen w-screen bg-sd-white"
    >
      <Navbar />
    </div>
  )
}