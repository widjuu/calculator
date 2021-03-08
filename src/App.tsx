import React from "react";

//components
import { Calc } from "./components/Calc";
import { SwitchTheme } from "./components/SwitchTheme";

import "./css/style.css";

export const App: React.FC = () => {
  return (
    <div className="main">
      <SwitchTheme />
      <Calc />
    </div>
  );
};
