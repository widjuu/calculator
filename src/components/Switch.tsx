import React from "react";

import { useTheme } from "../lib/theme";

import "../css/style.css";

export const Switch: React.FC = () => {
  const { dark, switchTheme } = useTheme();

  return (
    <div className="switchBox">
      <span className="switchText">light</span>
      <label className="switch">
        <input type="checkbox" checked={dark} onChange={switchTheme} />
        <span className="slider round"></span>
      </label>
      <span className="switchText">dark</span>
    </div>
  );
};
