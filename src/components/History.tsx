import React from "react";
import classNames from "classnames";

import "../css/style.css";

//utils
import { useTheme } from "../lib/theme";

interface IHistory {
  switchHistory: () => void;
}

let history = window.localStorage.getItem("history")?.split(",");
console.log(history);

export const History: React.FC<IHistory> = ({ switchHistory }) => {
  const { dark } = useTheme();
  const wrapper = classNames(
    "wrapper",
    dark ? "wrapper_dark" : "wrapper_light"
  );

  const numButton = classNames(
    "button",
    dark ? "num-button_dark" : "num-button_light"
  );

  const historyText = classNames(dark ? "num-button_dark" : "num-button_light");

  return (
    <div className={wrapper}>
      <div className={numButton} onClick={() => switchHistory()}>
        &#8592;
      </div>
      {history?.map((math) => (
        <p className={historyText} key={math}>
          {math}
        </p>
      ))}
    </div>
  );
};
