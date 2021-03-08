import React from "react";

//components
import { Calc } from "./components/Calc";
import { Switch } from "./components/Switch";

import "./css/style.css";

export const App: React.FC = () => {
  return (
    <div className="main">
      <Switch />
      <Calc />
    </div>
  );
};
