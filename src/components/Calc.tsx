import React, { useState } from "react";
import classNames from "classnames";

//components
import { Display } from "./Display";
import { Pad } from "./Pad";
import { History } from "./History";
import "../css/style.css";

//utils
import { useTheme } from "../lib/theme";

let history: any = [];

export const Calc: React.FC = () => {
  const { dark } = useTheme();
  const [result, setResult] = useState<number>(0);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true);
  const [pendingOperator, setPendingOperator] = useState<string>();
  const [display, setDisplay] = useState<string>("0");

  const [showHistory, setShowHistory] = useState<boolean>(false);
  const switchHistory = () => {
    setShowHistory((prev) => !prev);
  };

  const className = classNames(
    "wrapper",
    dark ? "wrapper_dark" : "wrapper_light"
  );

  const calculate = (
    rightOperand: number,
    pendingOperator: string
  ): boolean => {
    let newResult = result;

    switch (pendingOperator) {
      case "+":
        newResult += rightOperand;
        break;
      case "-":
        newResult -= rightOperand;
        break;
      case "×":
        newResult *= rightOperand;
        break;
      case "÷":
        if (rightOperand === 0) {
          return false;
        }

        newResult /= rightOperand;
    }

    let res = `${result}${pendingOperator}${
      waitingForOperand ? "" : display
    } = ${newResult}`;
    history.push(res);
    window.localStorage.setItem("history", history);

    setResult(newResult);
    setDisplay(newResult.toString().toString().slice(0, 7));

    return true;
  };

  const onNumClick = (digit: number) => {
    let newDisplay = display;

    if ((display === "0" && digit === 0) || display.length > 7) {
      return;
    }

    if (waitingForOperand) {
      newDisplay = "";
      setWaitingForOperand(false);
    }

    if (display !== "0") {
      newDisplay = newDisplay + digit.toString();
    } else {
      newDisplay = digit.toString();
    }

    setDisplay(newDisplay);
  };

  const onPointButtonClick = () => {
    let newDisplay = display;

    if (waitingForOperand) {
      newDisplay = "0";
    }

    if (newDisplay.indexOf(".") === -1) {
      newDisplay = newDisplay + ".";
    }

    setDisplay(newDisplay);
    setWaitingForOperand(false);
  };

  const onOperatorButtonClick = (operator: string) => {
    const operand = Number(display);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }
    } else {
      setResult(operand);
    }

    setPendingOperator(operator);
    setWaitingForOperand(true);
  };

  const onChangeSignButtonClick = () => {
    const value = Number(display);

    if (value > 0) {
      setDisplay("-" + display);
    } else if (value < 0) {
      setDisplay(display.slice(1));
    }
  };

  const onResultButtonClick = () => {
    const operand = Number(display);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }

      setPendingOperator(undefined);
    } else {
      setDisplay(operand.toString());
    }

    setResult(operand);
    setWaitingForOperand(true);
  };

  const onClearButtonClick = () => {
    setResult(0);
    setPendingOperator(undefined);
    setDisplay("0");
    setWaitingForOperand(true);
  };

  return (
    <>
      {!showHistory ? (
        <div className={className}>
          <Display display={display} />
          <Pad
            onNumClick={onNumClick}
            onPointButtonClick={onPointButtonClick}
            onOperatorButtonClick={onOperatorButtonClick}
            onChangeSignButtonClick={onChangeSignButtonClick}
            onResultButtonClick={onResultButtonClick}
            onClearButtonClick={onClearButtonClick}
            switchHistory={switchHistory}
          />
        </div>
      ) : (
        <History switchHistory={switchHistory} />
      )}
    </>
  );
};
