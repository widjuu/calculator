import React from "react";
import classNames from "classnames";

import "../css/style.css";

//utils
import { useTheme } from "../lib/theme";

interface IDisplay {
  display: string;
}

export const Display: React.FC<IDisplay> = ({ display }) => {
  const { dark } = useTheme();
  const className = classNames("display", dark ? "display_dark" : null);

  return (
    <div className={className}>
      <span>{display}</span>
    </div>
  );
};
