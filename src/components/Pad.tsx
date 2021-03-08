import React from "react";
import classNames from "classnames";

import "../css/style.css";

//utils
import { useTheme } from "../lib/theme";

interface IButtonsGroup {
  onNumClick: (value: number) => void;
  onPointButtonClick: () => void;
  onOperatorButtonClick: (operator: string) => void;
  onChangeSignButtonClick: () => void;
  onResultButtonClick: () => void;
  onClearButtonClick: () => void;
}

export const Pad: React.FC<IButtonsGroup> = ({
  onNumClick,
  onPointButtonClick,
  onOperatorButtonClick,
  onChangeSignButtonClick,
  onResultButtonClick,
  onClearButtonClick,
}) => {
  const { dark } = useTheme();
  const numButton = classNames(
    "button",
    dark ? "num-button_dark" : "num-button_light"
  );

  const etcButton = classNames(
    "button",
    dark ? "etc-button_dark" : "etc-button_light"
  );

  const operatorButton = classNames(
    "button",
    dark ? "operator-button_dark" : "operator-button_light"
  );

  return (
    <>
      <div className="buttonRow">
        <div className={etcButton} onClick={() => onClearButtonClick()}>
          AC
        </div>
        <div className={etcButton} onClick={() => onChangeSignButtonClick()}>
          &#177;
        </div>
        <div className={etcButton}>%</div>
        <div
          className={operatorButton}
          onClick={() => onOperatorButtonClick("÷")}
        >
          &divide;
        </div>
      </div>
      <div className="buttonRow">
        <div className={numButton} onClick={() => onNumClick(7)}>
          7
        </div>
        <div className={numButton} onClick={() => onNumClick(8)}>
          8
        </div>
        <div className={numButton} onClick={() => onNumClick(9)}>
          9
        </div>
        <div
          className={operatorButton}
          onClick={() => onOperatorButtonClick("×")}
        >
          x
        </div>
      </div>
      <div className="buttonRow">
        <div className={numButton} onClick={() => onNumClick(4)}>
          4
        </div>
        <div className={numButton} onClick={() => onNumClick(5)}>
          5
        </div>
        <div className={numButton} onClick={() => onNumClick(6)}>
          6
        </div>
        <div
          className={operatorButton}
          onClick={() => onOperatorButtonClick("-")}
        >
          -
        </div>
      </div>
      <div className="buttonRow">
        <div className={numButton} onClick={() => onNumClick(1)}>
          1
        </div>
        <div className={numButton} onClick={() => onNumClick(2)}>
          2
        </div>
        <div className={numButton} onClick={() => onNumClick(3)}>
          3
        </div>
        <div
          className={operatorButton}
          onClick={() => onOperatorButtonClick("+")}
        >
          +
        </div>
      </div>
      <div className="buttonRow">
        <div className={numButton} onClick={() => onNumClick(0)}>
          0
        </div>
        <div className={numButton}>&#8801;</div>
        <div className={numButton} onClick={() => onPointButtonClick()}>
          .
        </div>
        <div className={operatorButton} onClick={() => onResultButtonClick()}>
          =
        </div>
      </div>
    </>
  );
};
